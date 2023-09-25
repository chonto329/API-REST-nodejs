const {Router} = require('express')
const { createProductora,getProductora,updateProductora,deleteProductora} = require('../controllers/productora')

const router = Router()

// C R U D
router.post('/', createProductora)
router.get('/', getProductora)
router.put('/:id', updateProductora)
router.delete('/:id', deleteProductora)

module.exports = router