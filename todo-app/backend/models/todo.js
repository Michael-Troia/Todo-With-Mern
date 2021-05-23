const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: Boolean, required: true, default: false },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;