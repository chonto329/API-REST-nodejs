// ORM : Object Relational Mapping
const { Schema, model } = require('mongoose')

const ProductoraSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre productora requerido'],
        minlength: 1
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    Slogan: {
        type: String,
        minlength: 1
    },
    descripcion: {
        type: String,
        minlength: 1
    },
})

module.exports = model('Productora', ProductoraSchema)