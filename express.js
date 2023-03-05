const express = require('express')
const app = express()
const port = 3000

app.get('/about', (req, res) => {
  res.send('THis is about page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})