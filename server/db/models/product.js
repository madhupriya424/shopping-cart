let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let productSchema = new Schema({}, { strict: false});

let Product = mongoose.model('product', productSchema);

module.exports = {Product};