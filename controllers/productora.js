const { request, response } = require('express')
const Productora = require('../models/productora')

// CREAR PRODUCTORA
const createProductora = async (req = request, res = response) => {
    const { nombre, slogan, descripcion } = req.body

    try {
        let productoraBD;
        try {
            productoraBD = await Productora.findOne({ nombre })
        } catch (error) {
            console.log(error)
            return res.json({ msj: error })
        }
        if (productoraBD) {
            return res.status(400).json({ msj: "Ya existe el nombre" })
        } else {

            const datos = {
                nombre,
                slogan,
                descripcion
            }
            const productora = new Productora(datos)
            await productora.save()
            return res.status(201).json(productora)
        }
    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }

}

// LISTAR PRODUCTORA
const getProductora = async (req = request, res = response) => {
    try {

        const productora = await Productora.find()
        return res.json(productora)
    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ACTUALIZAR PRODUCTORA
const updateProductora = async (req = request, res = response) => {

    try {
        const { id } = req.params
        const  datos  = req.body
        datos.fechaActualizacion = new Date()
        const productora = await Productora.findByIdAndUpdate(id, datos, { new: true })
        return res.status(201).json(productora)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}

// ELIMINAR PRODUCTORA
const deleteProductora = async (req = request, res = response) => {
    try {
        const { id } = req.params

        const productora = await Productora.findByIdAndDelete(id, { new: true })
        return res.status(201).json(productora)

    } catch (error) {
        console.log(error)
        return res.json({ msj: error })
    }
}
module.exports = {
    createProductora,
    getProductora,
    updateProductora,
    deleteProductora
}