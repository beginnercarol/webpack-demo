const mongoose = require('./db').mongoose;

const Schema = mongoose.Schema;

var Todo = require('./schemas/todo').Todo;


var Item = mongoose.model('items',Todo);

module.exports = Item;
