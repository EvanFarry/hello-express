const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

app.get('/', (req, res) =>
  res.send('hello new port listener')
)

app.listen(PORT, () => console.log("hello world listening on port " + PORT ))
