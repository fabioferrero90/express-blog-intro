const express = require('express');
const app = express();

const getBasePath = require('./modules/getBasePath')

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
  const postsResponse = posts.map(post => {
    const basePath = getBasePath(req)
    post.immagine = !post.immagine.startsWith(basePath) ? basePath + post.immagine : post.immagine;
    return post
  });
  const response = {
    postcount: postsResponse.length,
    posts: postsResponse
  };
  res.json(response);
})