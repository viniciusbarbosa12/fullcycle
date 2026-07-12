const http = require('http');
const mysql = require('mysql2/promise');

const port = Number(process.env.PORT || 3000);

const dbConfig = {
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME || 'app_db',
  user: process.env.DB_USER || 'app_user',
  password: process.env.DB_PASSWORD || 'app_password',
  waitForConnections: true,
  connectionLimit: 10
};

let pool;

async function start() {
  pool = await connectWithRetry();
  await ensureSchema();

  const server = http.createServer(handleRequest);
  server.listen(port, () => {
    console.log(`Docker final API listening on port ${port}`);
  });
}

async function connectWithRetry() {
  let lastError;

  for (let attempt = 1; attempt <= 30; attempt += 1) {
    try {
      const connectionPool = mysql.createPool(dbConfig);
      await connectionPool.query('SELECT 1');
      return connectionPool;
    } catch (error) {
      lastError = error;
      console.log(`Waiting for MySQL... attempt ${attempt}/30`);
      await delay(2000);
    }
  }

  throw lastError;
}

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS people (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}

async function handleRequest(req, res) {
  try {
    if (req.method === 'GET' && req.url === '/health') {
      await pool.query('SELECT 1');
      return sendJson(res, 200, { status: 'ok', database: 'up' });
    }

    if (req.method === 'GET' && req.url === '/people') {
      const people = await listPeople();
      return sendJson(res, 200, { people });
    }

    if (req.method === 'POST' && req.url === '/people') {
      const body = await readJsonBody(req);
      const name = typeof body.name === 'string' ? body.name.trim() : '';

      if (!name) {
        return sendJson(res, 400, { error: 'name is required' });
      }

      const [result] = await pool.query('INSERT INTO people (name) VALUES (?)', [name]);
      return sendJson(res, 201, { id: result.insertId, name });
    }

    if (req.method === 'GET' && req.url === '/') {
      const people = await listPeople();
      return sendHtml(res, renderHome(people));
    }

    return sendJson(res, 404, { error: 'not found' });
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, { error: error.message });
  }
}

async function listPeople() {
  const [rows] = await pool.query('SELECT id, name, created_at FROM people ORDER BY id DESC');
  return rows;
}

function renderHome(people) {
  const items = people
    .map((person) => `<li>#${person.id} - ${escapeHtml(person.name)}</li>`)
    .join('');

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Docker Final Project</title>
  </head>
  <body>
    <main>
      <h1>Full Cycle Rocks!</h1>
      <p>This page is served through nginx, Node and MySQL.</p>
      <ul>${items || '<li>No people registered yet.</li>'}</ul>
    </main>
  </body>
</html>`;
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', (chunk) => {
      raw += chunk;
    });

    req.on('end', () => {
      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error('invalid JSON body'));
      }
    });

    req.on('error', reject);
  });
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

function sendHtml(res, html) {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
