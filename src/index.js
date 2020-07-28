const express = require('express')
const path = require('path')
const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/page/index.html'))
})

app.listen('3003', () => {
  console.log('app listening on port 3003 🚀')
})