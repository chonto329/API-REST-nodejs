const { request, response } = require('express')
const Tipo = require('../models/tipo')

// CREAR TIPO
const createTipo = async (req = request, res = response) => {
    const { nombre, descripcion } = req.body
    try {

        let tipoBD
        try {
            tipoBD = await Tipo.findOne({ nombre })

        } catch (error) {
            console.log(error)
            return res.json({ msj: error })
        }
        if (tipoBD) {
            res.status(400).json({ msj: "Ya existe el nombre" })
        } else {

            const datos = {
                nombre,
                descripcion
            }
            const tipo = new Tipo(datos)
            await tipo.save()
            return res.status(201).json(tipo)
        }

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })

    }
}

// LISTAR TIPO
const getTipo = async (req = request, res = response) => {
    try {

        const tipo = await Tipo.find()
        return res.json(tipo)
    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ACTUALIZAR TIPO
const updateTipo = async (req = request, res = response) => {

    try {
        const { id } = req.params
        const  datos  = req.body
        datos.fechaActualizacion = new Date()
        const tipo = await Tipo.findByIdAndUpdate(id, datos, { new: true })
        return res.status(201).json(tipo)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ELIMINAR TIPO
const deleteTipo= async (req = request, res = response) => {
    try {
        const { id } = req.params
        const tipo = await Tipo.findByIdAndDelete(id, { new: true })
        return res.status(201).json(tipo)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}
module.exports = {
    createTipo,
    getTipo,
    updateTipo,
    deleteTipo
}