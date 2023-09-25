const { Router } = require('express')
const { createGenero,getGenero,updateGenero,deleteGenero} = require('../controllers/genero')

const router = Router()

//  C R U D
router.post('/', createGenero)
router.get('/', getGenero)
router.put('/:id', updateGenero)
router.delete('/:id', deleteGenero)


module.exports = router
