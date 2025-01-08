const http = require('http');
// We dont need to install http module as it is a core module

const server = http.createServer((req, res) => {
  res.end('Hello World');
})