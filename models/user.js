const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    hashedPassword: {
        type: String,
        required: true,
    }
}, {
    toJSON: {
        transform: (document, returnedObject) => {
            delete returnedObject.hashedPassword;
        }
    }
});

const User = mongoose.model('User', userSchema); // register the model
module.exports = User;
