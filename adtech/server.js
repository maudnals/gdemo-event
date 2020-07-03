const express = require('express')
const app = express()

// Adtech conversion logics

const priceBuckets = {
  $80: '1',
  $120: '2',
  $200: '3'
}

const prices = Object.keys(priceBuckets)

const maxValue = priceBuckets[prices[prices.length - 1]]

function toHex(value, maxValue) {
  return (parseInt(value, 16) % maxValue).toString(16)
}

const getConversionData = (value) => toHex(value, maxValue)

// Server

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
  const priceBucket = priceBuckets[req.query.price]
  const conversionData = getConversionData(priceBucket)
  res.redirect(
    302,
    `/.well-known/register-conversion?conversion-data=${conversionData}`
  )
})

const listener = app.listen(8000, () => {
  console.log('App is listening on port ' + listener.address().port)
})
