const http = require('http');
const os = require('os');

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/health') {
    res.end(JSON.stringify({ status: 'ok' }));
    return;
  }

  res.end(JSON.stringify({
    message: 'Node is running inside Docker',
    hostname: os.hostname()
  }));
});

server.listen(port, () => {
  console.log(`Node demo listening on port ${port}`);
});
