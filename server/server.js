const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

const db = require('../db/db.js')

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))



// Get Lists
app.get('/api/lists', (req, res) => {
  console.log('get req')
  db.findAllLists()
  .then((data) => {
    console.log(data)
    res.send(data)
  })
  .catch((err) => {
    console.log(err)
  })
})

// Add new Item
app.patch('/api/item/:listId', (req, res) => {
  const listId = req.params.listId;
  console.log('listId is', listId);
  console.log(req.body)
})

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
