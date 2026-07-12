const http = require('http');
const mysql = require('mysql2/promise');

const port = Number(process.env.PORT || 3000);

const dbConfig = {
  host: process.env.DB_HOST || 'db',
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME || 'compose_demo',
  user: process.env.DB_USER || 'compose_user',
  password: process.env.DB_PASSWORD || 'compose_password'
};

let pool;

async function start() {
  pool = mysql.createPool(dbConfig);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS visits (
      id INT AUTO_INCREMENT PRIMARY KEY,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  http.createServer(handleRequest).listen(port, () => {
    console.log(`Compose API listening on port ${port}`);
  });
}

async function handleRequest(req, res) {
  try {
    if (req.url === '/health') {
      await pool.query('SELECT 1');
      return sendJson(res, 200, { status: 'ok', database: 'up' });
    }

    if (req.url === '/visits') {
      await pool.query('INSERT INTO visits () VALUES ()');
      const [rows] = await pool.query('SELECT COUNT(*) AS total FROM visits');
      return sendJson(res, 200, { visits: rows[0].total });
    }

    return sendJson(res, 404, { error: 'not found' });
  } catch (error) {
    return sendJson(res, 500, { error: error.message });
  }
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

start().catch((error) => {
  console.error(error);
  process.exit(1);
});
