const http = require('http');
// We dont need to install http module as it is a core module

const server = http.createServer((req, res) => {
  console.log(req);
})

// CreateServer method creates an object a listen method
// listen takes 1 argument which is the port number
// 1. Port to listen for http traffic on

server.listen(3000)
// Go to the browser and type localhost:3000
// We will see the request object in the terminal
