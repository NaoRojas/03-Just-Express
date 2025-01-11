const path = require('path')
const express = require('express')
const cookieParser = require('cookie-parser') // Add this line
const app = express()

const helmet = require('helmet')
app.use(helmet({
  contentSecurityPolicy: false,
}))

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser()) // Add this line

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
  res.send('Sanity Check')
})

app.get('/login', (req, res) => {
  const { msg } = req.query
  if (msg === 'fail') {
    res.render('login', { error: 'Invalid username or password' })
    return
  }
  res.render('login')
})

app.get('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('/login')
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (password === 'x') {
    res.cookie('username', username)
    res.redirect('/welcome')
  } else {
    res.redirect('/login?msg=fail')
  }
  res.json(req.body)
})

app.get('/welcome', (req, res) => {
  res.render('welcome', { username: req.cookies.username })
})

app.listen(3000)