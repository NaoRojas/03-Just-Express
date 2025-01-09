const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/axios', (req, res) => {
  console.log("Headers", req.headers)
  console.log("Body", req.body)
  res.send('Hello World!')
}
)
// 🐨 In the browser go to http://localhost:3000/axios.html

app.listen(3000)