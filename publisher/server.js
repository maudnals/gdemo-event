const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('static'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const listener = app.listen(process.env.PORT || PORT, () => {
  console.log(
    '📰 Publisher server is listening on port ' + listener.address().port
  )
})
