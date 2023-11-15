const mongoose = require ('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 30
    },
    description: {
        type: String,
        // required: true,
        trim: true,
        maxlength: 500
    },
    status: {
        type: Boolean,
        default: 'false'
    }
})

module.exports = mongoose.model('Todo', todoSchema);
