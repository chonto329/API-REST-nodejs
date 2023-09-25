const {Router} = require('express')
const {createDirector,getDirector,updateDirector,deleteDirector} = require('../controllers/director')

const router = Router()

// C R U D
router.post('/', createDirector)
router.get('/', getDirector)
router.put('/:id', updateDirector)
router.delete('/:id', deleteDirector)

module.exports = router