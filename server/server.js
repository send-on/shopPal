const express = require('express');
const path = require('path');
const parser = require('body-parser');

const app = express();
const PORT = 3000;

const db = require('../db/db.js')

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))

// Get one list
app.get('/api/lists/:listId', (req, res) => {
  const listId = req.params.listId;
  // console.log('server get one list triggered ', req.params.listId)
  db.findOneList(listId)
  .then((data) => {
    // console.log('get one list success data: ', data)
    res.send(data)
  })
})

// Get all lists
app.get('/api/lists', (req, res) => {
  // console.log('server get All list triggered ')
  db.findAllLists()
  .then((data) => {
    res.send(data)
  })
  .catch((err) => {
    console.log('get all lists error is ', err)
  })
})

// Modify quantity
app.patch('/api/itemqty/:listId', (req, res) => {
  const listId = req.params.listId;
  db.modifyQuantityItem (listId, req.body)
  .then((data) => {
    res.send('success patch:' + data)
  })
  .catch((err) => {
    console.log('add new item error: ', err);
  })
})

// Add new Item
app.patch('/api/item/:listId', (req, res) => {
  const listId = req.params.listId;
  // console.log('add new item listId is', listId);
  db.insertOneItem(listId, req.body)
  .then((data) => {
    // console.log('add new item success data: ', data);
    res.send('success patch:' + data)
  })
  .catch((err) => {
    console.log('add new item error: ', err);
  })
})





app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
