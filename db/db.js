
const HOST = 'localhost';
const USER = 'user';
const PASSWORD = 'password';
const DATABASE = 'database';

const mongoose = require('mongoose');
const mongoUrl = `mongodb://${HOST}/${DATABASE}`;

mongoose.connect(mongoUrl); // Try localhost first
// mongoose.connect(mongoUrl); // Try localhost first
mongoose.connection.on('connected', () => {
});

mongoose.connection.on('error', () => {
  console.log('error');
});

const mySchema = mongoose.Schema({

})



// module.exports = connection;


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
