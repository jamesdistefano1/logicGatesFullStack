const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Student = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
});

// we'll want a way to be able to pull information from the signin to be able to update this

module.exports = mongoose.model('Student', Student);