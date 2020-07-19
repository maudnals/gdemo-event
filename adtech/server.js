const express = require('express')
const app = express()

// Utils

function toHex(value, maxValue) {
  return (parseInt(value, 16) % maxValue).toString(16)
}

// Conversion logics
const priceBuckets = {
  // expected to be more of a label such as "started checkout flow" ("register to newsletter")
  // ""
  $80: '1',
  $120: '2',
  $200: '3'
}

const prices = Object.keys(priceBuckets)

const maxValue = priceBuckets[prices[prices.length - 1]]

const getConversionData = (value) => toHex(value, maxValue)

const getConversionData = (value) => toHex(value, maxValue)

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
  const priceBucket = priceBuckets[req.query.price]
  const conversionData = getConversionData(priceBucket)
  res.redirect(
    302,
    `/.well-known/register-conversion?conversion-data=${conversionData}`
  )
})

const listener = app.listen(8000, () => {
  console.log(
    '🚀 Adtech server is listening on port ' + listener.address().port
  )
})
