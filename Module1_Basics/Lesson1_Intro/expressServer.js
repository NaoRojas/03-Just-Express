// 1.  Create the package.json file
// npm init

// 2. install express module
// npm install express --save
const path = require('path')
const express = require('express')
const app = express()

// 🗒️ use method is used to serve static files
app.use(express.static('public'))

app.all('/', (req, res) => {
  // Express handles the basic headers for us
  res.sendFile(path.join(__dirname, 'node.html'))
  // Express handles the end method for us
})

app.listen(3000)

