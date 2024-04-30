/*
 * @Author: Christie Laferriere & Abel xabelpenguin@gmail.com
 * @Date: 2024-04-27 5:40 pm
 * @Last Modified by: peter_gao@outlook.com
 * @Last Modified time: 2024-04-29 17:30:27
 */

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: false },
    purchaseDate: { type: String, required: true },
    expirationDate: { type: String, required: true }
});

module.exports = mongoose.model('MenuItem', ItemSchema);


