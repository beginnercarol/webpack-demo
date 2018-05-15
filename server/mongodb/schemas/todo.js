const mongoose = require('mongoose');
const Schema = mongoose.Schema;

exports.Todo = new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    completed: Boolean
})