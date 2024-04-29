const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if(req.method === 'GET' && req.url==='/home'){
    res.end('Home Page\n');
  } 
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

