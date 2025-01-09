const express = require('express')
const app = express()

function validateUser(req, res, next) {

  // 🐨 Get info from the request object
  res.locals.validated = true
  console.log("Validated Ran!")

  // 🐨 You call next() to move to the next middleware function
  next()
}

app.use('/admin', validateUser)

app.get('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>')
  console.log(res.locals.validated)
})

app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin Page</h1>')
  console.log(res.locals.validated)
})


app.listen(3000)