const {Router} = require('express')
const { createMedia,getMedia,updateMedia,deleteMedia} = require('../controllers/media')
const media = require('../models/media')

const router = Router()

// C R U D
router.post('/', createMedia)
router.get('/', getMedia)
router.put('/:id', updateMedia)
router.delete('/:id', deleteMedia)

module.exports = router