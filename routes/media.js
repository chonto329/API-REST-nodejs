const {Router} = require('express')
const { createMedia,getMedia,updateMedia,deleteMedia,upload} = require('../controllers/media')
const media = require('../models/media')

const router = Router()

// C R U D
router.post('/',  createMedia, upload.single('imagen') )
router.get('/', getMedia)
router.put('/:id', updateMedia)
router.delete('/:id', deleteMedia)

module.exports = router