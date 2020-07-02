const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.use(express.static('public'))

app.get('/ad', (req, res) => {
  res.sendFile(__dirname + '/ad.html')
})

app.get('/script', (req, res) => {
  res.sendFile(__dirname + '/script.js')
})

app.get('/conversion', (req, res) => {
  console.log(req.query)
})

const listener = app.listen(8000, () => {
  console.log('App is listening on port ' + listener.address().port)
})
