const express = require('express')
const app = express()

// 🗒️ use method is used to serve static files
// 🗒️ It takes 1 argument which is the folder name

// Our app will look for the static files in the public folder
// If we want to look styles.css file, we will have to put it in the public folder
// and then we can access it by localhost:3000/styles.css 
// Anybody can access it
app.use(express.static('public'))

app.all('*', (_, res) => {
  res.send('<h1>Welcome to the ALL page</h1>')
})

app.listen(3000)