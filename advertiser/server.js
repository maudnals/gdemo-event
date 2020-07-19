const express = require('express')
const app = express()
const PORT = 8081

app.use(express.static('static'))

app.get('/shoe07', (req, res) => {
  res.sendFile(__dirname + '/shoe07.html')
})

app.get('/shoe07/added-to-cart', (req, res) => {
  res.sendFile(__dirname + '/shoe07-added-to-cart.html')
})

const listener = app.listen(PORT, () => {
  console.log(
    '👟 Advertiser server is listening on port ' + listener.address().port
  )
})
