const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    apellidos: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    },
    token: {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);
