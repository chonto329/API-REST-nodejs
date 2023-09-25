const express = require('express')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()

const generos = require('./routes/genero')
const productoras = require('./routes/productora')
const tipos = require('./routes/tipo')
const directores = require('./routes/director')
const medias = require('./routes/media')

mongoConn()

const app = express()

// middlewares
app.use(express.json())

// RUTAS 
app.use('/api/v1/tipos', tipos)
app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/medias', medias)

module.exports = app