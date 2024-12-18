const express = require('express');
const app = express();

const posts = require('./data/posts')

const port = 3000;

app.get('/', (req, res) => {
  res.send("Server del mio Blog")
})

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`)
})

