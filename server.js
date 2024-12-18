const express = require('express');
const app = express();

const posts = require('./data/posts')

const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send("Server del mio Blog")
})

app.listen(port, () => {
  console.log(`Sono in ascolto alla porta ${port}`)
})

app.get('/bacheca', (req, res) => {
  posts.postcount = 0;
  posts.forEach(el => posts.postcount++)
  console.log(posts)
  res.json(posts)
})