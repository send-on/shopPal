const mongoose = require('mongoose');

const HOST = 'localhost';
const PORT = 27017;
const DATABASE = 'shoppal';

const mongoUrl = `mongodb://${HOST}:${PORT}/${DATABASE}`;

mongoose.connect(mongoUrl); // Try localhost first
// mongoose.connect(mongoUrl); // Try localhost first
mongoose.connection.on('connected', () => {
});

mongoose.connection.on('error', () => {
  console.log('error');
});

const listSchema = mongoose.Schema({
  listId: { type: Number , unique: true },
  listTitle: String,
  createdAt: { type: Date , default: Date.now },
  items: { type : Array , "default" : [] },
})

const ListModel = mongoose.model('List', listSchema);

// Find all lists
const findAllLists = () => {
  console.log('find all db triggered')
  return ListModel.find();
}

// Find one lists
const findOneList = (id) => {
  console.log('find ONE db triggered with id: ', id)
  return ListModel.find({ listId: id });
}

// Create new List
const insertOneList = (list, cb) => ListModel.create(list, cb);

// Inset new item to list
const insertOneItem = (id, obj) => {
  console.log('insertOneItem triggered on list id: ', id)
  return ListModel.update({listId: id}, {$push: {items: obj}})
}

// Delete List
const clearDb = (cb) => ListModel.remove({}, cb);

module.exports = {
  ListModel,
  findOneList,
  findAllLists,
  insertOneList,
  insertOneItem,
  clearDb
};


// const restaurantSchema = mongoose.Schema({
//   place_id: { type: Number, unique: true },
//   name: String,
//   google_rating: Number,
//   zagat_rating: Number,
//   photos: [String],
//   neighborhood: String,
//   price_level: Number,
//   types: String,
//   nearby: [Number],
// });
//
// const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);
//
// const findOne = id => RestaurantModel.find({ place_id: id });
//
// const insertOne = restaurant => RestaurantModel.create(restaurant);
//
// const findMany = ids => RestaurantModel.find({ place_id: { $in: ids } });
//
// const clearDb = () => RestaurantModel.remove({});
//
//
// module.exports = {
//   RestaurantModel,
//   findOne,
//   insertOne,
//   findMany,
//   clearDb,
// };
