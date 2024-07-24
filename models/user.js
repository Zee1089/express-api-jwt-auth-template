const mongoose = require('mongoose');

const userSchema = {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    }
}

const User = mongoose.model('User', userSchema); // register the model
module.exports = User;
