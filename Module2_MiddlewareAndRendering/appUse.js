const express = require('express')
const app = express()

function validateUser(req, res, next) {

  // 🐨 Get info from the request object
  res.locals.validated = true
  console.log("Validated Ran!")

  // 🐨 You call next() to move to the next middleware function
  next()
}
// 🐨 This will run validateUser on ALL paths, ALL methods!
app.use('/', validateUser)

// 🐨 This will run validateUser on /admin, ALL methods!
app.use('/admin', validateUser)

// 🐨 This will run validateUser on /, only on GET methods
app.get('/', validateUser)
// An it looks like this:
// app.get('/', (req, res, next) => {
//   res.locals.validated = true
//   console.log("Validated Ran!")
//   next()
// })


app.get('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>')
  console.log(res.locals.validated)
})

app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin Page</h1>')
  console.log(res.locals.validated)
})

app.listen(3000)