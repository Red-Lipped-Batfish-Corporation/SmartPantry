const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseDate: { type: String, required: true },
  expirationDate: {type: String, required: true }
});

module.exports = mongoose.model('MenuItem', ItemSchema);
