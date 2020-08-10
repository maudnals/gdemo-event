const express = require('express')
const app = express()
const PORT = 8000

// Utils

function toHex(value, maxValue) {
  return (parseInt(value, 16) % maxValue).toString(16)
}

// Conversion logics

const conversionValues = {
  'sign-up': 1,
  'add-to-cart': 2,
  'check-out': 3
}

const maxValue = Math.max(...Object.values(conversionValues))

const getConversionData = (value) => toHex(value, maxValue)

// Reports

let reports = []

// Server

app.use(express.static('static'))

app.post('/*', (req, res) => {
  const newReport = req.query
  console.log(req.query)
  reports = [...reports, newReport]
  // TODO response OK
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/ad', (req, res) => {
  res.sendFile(__dirname + '/ad.html')
})

app.get('/script', (req, res) => {
  res.sendFile(__dirname + '/script.js')
})

app.get('/conversion', (req, res) => {
  // TODO what if 3?
  const priceBucket = conversionValues[req.query.type]
  const conversionData = getConversionData(priceBucket)
  res.redirect(
    302,
    `/.well-known/register-conversion?conversion-data=${conversionData}`
  )
})

app.get('/reports', (req, res) => {
  res.send(JSON.stringify(reports))
})

const listener = app.listen(process.env.PORT || PORT, () => {
  console.log(
    '🚀 Adtech server is listening on port ' + listener.address().port
  )
})
