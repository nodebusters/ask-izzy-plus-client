const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    email: String,
    firstName: String,
    lastName: String,
    organisation:{type: mongoose.Schema.Types.ObjectId, ref: 'Organisation'},
});

module.exports = mongoose.model('User', userSchema)