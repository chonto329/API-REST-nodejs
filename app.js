const express = require('express')
const { mongoConn } = require('./databases/configuration')
const dotenv = require('dotenv').config()
const cors = require('cors')

const generos = require('./routes/genero')
const productoras = require('./routes/productora')
const tipos = require('./routes/tipo')
const directores = require('./routes/director')
const medias = require('./routes/media')

mongoConn()

const app = express()

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
// middlewares
app.use(express.json())
app.use(cors(corsOptions))


app.use(cors(corsOptions));

// RUTAS 
app.use('/api/v1/tipos', tipos)
app.use('/api/v1/generos', generos)
app.use('/api/v1/directores', directores)
app.use('/api/v1/productoras', productoras)
app.use('/api/v1/medias', medias)

module.exports = app