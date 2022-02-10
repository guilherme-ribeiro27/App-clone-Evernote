/**
 * This is the Schema for note collection
 */

const mongoose = require('mongoose')

var noteSchema = new mongoose.Schema({
    title: String,
    body: String,
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

noteSchema.index({'title': 'text', 'body': 'text'})
// author is the relationship whit user

module.exports = mongoose.model('Note', noteSchema); //this is the model that should be used to put, delete, etc.