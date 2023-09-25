const { request, response } = require('express')
const Director = require('../models/director')
const e = require('express')


// CREAR  DIRECTOR
const createDirector = async (req = request, res = response) => {
    const { nombre } = req.body
    try {

        const datos = { nombre }
        const director = new Director(datos)
        await director.save()
        return res.json(director)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// LISTAR DIRECTOR
const getDirector = async (req = request, res = response) => {

    try {
        const director = await Director.find()
        return res.status(201).json(director)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ACTUALIZAR DIRECTOR
const updateDirector = async (req = request, res = response) => {

    try {
        const { id } = req.params
        const data = req.body
        data.fechaActualizacion = new Date()
        const director = await Director.findByIdAndUpdate(id, data, { new: true })
        return res.status(201).json(director)
    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ELIMINAR DIRECTOR
const deleteDirector = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const director = await Director.findByIdAndDelete(id, { new: true })
        return res.status(201).json(director)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}
module.exports = {
    createDirector,
    getDirector,
    updateDirector,
    deleteDirector
}