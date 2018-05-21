const dummyData = require('./dummyData.json');
const db = require('../db/db.js');
const mongoose = require('mongoose');

const seedDb = (array) => {
  let counter = 0;

  var createList = () => {
    console.log('recursion started')
    const obj = {
      listId : array[counter].listId,
      listTitle: array[counter].listTitle,
      items: array[counter].items
    }
    console.log('1', obj)
    db.insertOneList(obj, (err, content) => {
      console.log('database', obj)
      if (err) {
        return err;
      }
      counter++;
      if (counter < array.length) {
        console.log('again, counter is', counter)
        createList();
      } else {
        console.log('done, counter is', counter)
        mongoose.disconnect();
        return counter;
      }
    });
  };

  db.clearDb(() => createList());
};

seedDb(dummyData);
