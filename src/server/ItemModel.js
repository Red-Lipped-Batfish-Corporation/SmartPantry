const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  purchaseDate: { type: String, required: true },
  expirationDate: {type: String, required: true }
});

module.exports = mongoose.model('MenuItem', ItemSchema);


/*
 * @Author: Christie Laferriere & Abel xabelpenguin@gmail.com
 * @Date: 2024-04-27 5:40 pm
 * @Last Modified by:Abel xabelpenguin@gmail.com
 * @Last Modified time: 2024-04-27 10:30 PM 
 */