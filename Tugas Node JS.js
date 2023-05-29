const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const { query } = url.parse(req.url, true);
  const radius = query.radius;

  if (radius === undefined) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error: Masukkan parameter radius dalam string query.\n');
  } else {
    const area = Math.PI * Math.pow(radius, 2);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Lingkaran dengan radius ${radius}:\nArea: ${area}\n`);
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});