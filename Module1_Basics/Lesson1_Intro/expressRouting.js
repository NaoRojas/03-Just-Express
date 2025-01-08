const express = require('express')

const app = express()

// 🗒️ app has many methods like get, post, put, delete (RESTful methods)
// ALL - I will accept any method

// app.all('/', (req, res) => {
//   res.send('<h1>Welcome to the ALL page</h1>')
// })
// ------------------------------------------------------
// 🐨 Uncomment the above code and comment the below code to see the difference

app.get('/', (req, res) => {
  res.send('<h1>Welcome to the GET page</h1>')
})
app.post('/', (req, res) => {
  res.send('<h1>Welcome to the POST page</h1>')

})
app.put('/', (req, res) => {
  res.send('<h1>Welcome to the PUT page</h1>')

})
app.delete('/', (req, res) => {
  res.send('<h1>Welcome to the DELETE page</h1>')

})

// 🐨 Use Postman to test the post, put and delete methods

app.listen(3000)

