const express = require('express')
const app = express()


app.get('/', (req, res) =>
  res.send('hello new git?')
)

app.listen(3333, () => console.log("hello world listening on port 3333!"))
