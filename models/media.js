const { Schema, model } = require('mongoose')

const MediaSchema = Schema({
    serial : {
        type: String,
        required: [true, 'Serial requerido'],
        unique: [true, 'media ya existe']
    },
    titulo : {
        type: String,
        required: [true, 'Titulo requerido'],
    },
    sipnosis : {
        type : String
    },
    url: {
        type: String,
        unique: [true, 'URL ya existe']
    },
    año: { 
        type : String,
    },
    // CLAVES FORANEAS 
    genero: {
        type: Schema.Types.ObjectId,
        ref: 'Genero',
        required: true
    },
    director :{
        type: Schema.Types.ObjectId,
        ref : 'Director',
        required : true
    },
    productora : { 
        type : Schema.Types.ObjectId,
        ref : 'Productora',
        required: true
    },
    tipo: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: true
    }
})

module.exports = model('Media', MediaSchema)