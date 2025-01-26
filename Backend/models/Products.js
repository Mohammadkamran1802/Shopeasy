const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  brand: String,
  image: String,
  description: String,
  barcode: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);