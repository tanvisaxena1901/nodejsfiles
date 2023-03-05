const express = require('express')
//const path = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/hello/:name2', (req, res) => {
  res.send('Hello World! ' + req.params.name2)
})
app.get('/about', (req, res) => {
   //res.send('Hello World! OOO')
    res.sendFile(path.join(__dirname,'index.html'));
  // res.json({"harry":34})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})