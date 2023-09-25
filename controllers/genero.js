const Genero = require('../models/genero')
const { request, response } = require('express')


// CREAR GENERO 
const createGenero = async (req = request, res = response) => {
    const { nombre, descripcion } = req.body
    try {
            try {
                const generoDB = await Genero.findOne({ nombre })
                if (generoDB) {
                    return res.status(400).json({ msj: 'Ya existe el nombre' })
                }// select * from generos WHERE nombre = ?
            } catch (error) {
                console.log(Error)
                return res.json({ msj: error })
            }
         const datos = {
            nombre,
            descripcion
        }
         const genero = new Genero(datos) // ENVIAMOS LOS DATOS A EL MODELO GENERO 
         await genero.save() // METODO PARA GUARDAR LOS DATOS 
        return res.status(201).json(genero)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }

}

// LISTAR GENERO
const getGenero = async (req = request , res = response) => {
    try{

        const genero = await Genero.find()
        return res.json(genero)
    }catch(error){
        console.log(error)
        return res.json({msj : error})
    }
}

// ACTUALIZAR GENERO
const updateGenero = async (req = request , res = response) => {

    try{
        const {id} = req.params
        const datos = req.body
        datos.fechaActualizacion = new Date()
        const genero = await Genero.findByIdAndUpdate(id, datos, {new: true})
        return res.status(201).json(genero)

    }catch(error){
        console.log(error)
        return res.json({msj : "Error " . error})
    }
}

// ELIMINAR GENERO
const deleteGenero = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const genero = await Genero.findByIdAndDelete(id, { new: true })
        return res.status(201).json(genero)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}
module.exports = {
    createGenero,
    getGenero,
    updateGenero,
    deleteGenero
}