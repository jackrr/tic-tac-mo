const express = require('express')
const app = express()
const history = require('connect-history-api-fallback')

app.use(history())
app.use('/', express.static('public'))

app.listen(3000)

console.log('Running site at localhost:3000')
