const express = require('express')
const helmet = require('helmet');
const app = express()

app.use(helmet())
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/axios', (req, res) => {
  console.log("Headers", req.headers)
  console.log("Body", req.body)
  res.json({ status: 'ok' })
}
)
// 🐨 In the browser go to http://localhost:3000/axios.html
// In PostMan, send a POST request to http://localhost:3000/axios

app.listen(3000)