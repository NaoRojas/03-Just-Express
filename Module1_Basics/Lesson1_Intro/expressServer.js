// 1.  Create the package.json file
// npm init

// 2. install express module
// npm install express --save
const express = require('express')
const app = express()

app.all('*', (req, res) => {
  // Express handles the basic headers for us
  res.send('<h1>Welcome to the home page</h1>')
  // Express handles the end method for us
})

app.listen(3000)

