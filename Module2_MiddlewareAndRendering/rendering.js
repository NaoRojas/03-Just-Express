const path = require('path')

const express = require('express')
const app = express()
const helmet = require('helmet')

app.get(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(helmet())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  // 🐨 In order to use res.render we need:
  // 1. We define a view engine (like mustache, ejs, handlebars, jade/pug, etc)
  // 2. Inside one of our routes, we call res.render('viewName') 
  // 3. We pass that res.render 2 things:
  //   a. The file we want to use
  //   b. The data we want to pass to that file
  // 4. Express uses the node module for our view engine and parses the file
  // 5. The final result of this proccess is a compiled product of the things the browser can read (HTML, CSS, JS)

  res.render('index')
})

app.listen(3000)