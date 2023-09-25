const {Router} = require('express')
const {createTipo,getTipo,updateTipo,deleteTipo} = require('../controllers/tipo')

const router = Router()

// C R U D
router.post('/', createTipo)
router.get('/', getTipo)
router.put('/:id', updateTipo)
router.delete('/:id', deleteTipo)

module.exports = router