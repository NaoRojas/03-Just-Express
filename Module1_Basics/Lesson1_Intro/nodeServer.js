const http = require('http')
// We dont need to install http module as it is a core module
const fs = require('fs')


const server = http.createServer((req, res) => {
  console.log(req.url)
  if (req.url === '/') {
    const homePage = fs.readFileSync('node.html')
    res.write(homePage)
    res.end()

  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' })
    res.write('<style>body { margin-top:40%; background-color: black; color: white; text-align: center; }</style>')
    res.write('<h1>404 Page Not Found</h1>')
  }
})

// CreateServer method creates an object a listen method
// listen takes 1 argument which is the port number
// 1. Port to listen for http traffic on

server.listen(3000)
// Go to the browser and type localhost:3000
// We will see the request object in the terminal
