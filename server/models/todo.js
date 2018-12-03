var mongoose = require('mongoose');

var Todo = mongoose.model('Todos', {
    text: {
        type: String,
        minlength: 5,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = { Todo };