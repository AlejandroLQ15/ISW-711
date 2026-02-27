const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    nombre: {
        required: true,
        type: String
    },
    codigo: {
        required: true,
        type: String
    },
    descripcion: {
        required: true,
        type: String
    },
    profesor_id: {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professor'
    }
})

module.exports = mongoose.model('Course', courseSchema)