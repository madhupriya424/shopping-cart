let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let categoriesSchema = new Schema({}, { strict: false});

let Categories = mongoose.model('categories', categoriesSchema);

module.exports = {Categories};