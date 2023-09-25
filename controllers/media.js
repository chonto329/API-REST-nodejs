const { request, response } = require('express')
const Media = require('../models/media')
const Director = require('../models/director')
const Genero = require('../models/genero')
const Productora = require('../models/productora')
const Tipo = require('../models/tipo')
const multer = require('multer')

// METODO PARA LA RUTA DE LAS IMAGENES 
const storage = multer.diskStorage({
    destination : (req, file ,cb) => {
        cb(null,"./uploads")
    },
    filename : (req, file , cb) => {
        cb(null , file.filename + " -" + Date.now())
    }
})
const upload = multer({storage})

// CREAR MEDIA
const createMedia = async (req = request, res = response) => {

    try {
        const { genero, director, productora, tipo, url, serial,titulo, sipnosis, año } = req.body

        // VALIDADAR GENERO 
        const generoBD =  Genero.findOne({ _id: genero})
        console.log(generoBD)
        if (!generoBD) {
            return res.status(400).json({
                msj: "Genero invalido"
                
            })
        }
        //VALIDAR DIRECTOR
        const directorBD =  Director.findOne({ _id: director })
        if (!directorBD) {
            return res.status(400).json({
                msj: "Director invalido"
            })
        }
        //VALIDAR PRODUCTORA
        const productoraBD =  Productora.findOne({ _id: productora})
        if (!productoraBD){
            return res.status(400).json({
                msj: "Productora invalida"
            })
        }
        //VALIDAR TIPO
        const tipoBD =  Tipo.findOne({ _id: tipo})
        if (!tipoBD) {
            return res.status(400).json({
                msj: "Tipo invalido"
            })
        }

        const mediaBD = await Media.findOne({ serial, url })
        if (mediaBD) {
            return res.status(400).json({ msj: "Productora invalida" })
        } else {
            const datos = {
                serial,
                titulo,
                sipnosis,
                url,
                año,
                genero,
                director,
                productora,
                tipo
            }
            const media = new Media(datos)
            await media.save()
            return res.status(201).json(media)

        }
    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }

}

// LISTAR MEDIA
const getMedia = async (req = request, res = response) => {
    try {
        const mediaBD = await Media.find()
            .populate({ path: 'genero' })
            .populate({ path: 'director' })
            .populate({ path: 'productora' })
            .populate({ path: 'tipo' })

        return res.status(201).json(mediaBD)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// EDITAR MEDIA
const updateMedia = async (req = request , res = response) => {
    try {

        const { id } = req.params
        const data = req.body
        data.fechaActualizacion = new Date()
        const media = await Media.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(media)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ELIMINAR MEDIA
const deleteMedia = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const media = await Media.findByIdAndDelete(id, { new: true })
        return res.status(201).json(media)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}
module.exports = {
    createMedia,
    getMedia,
    updateMedia,
    deleteMedia,
    upload
}