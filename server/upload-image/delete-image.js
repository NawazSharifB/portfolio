const express = require('express')
const router = express.Router()
const storage = require('../../index')

router.post('/', async(req, res) => {
    const fileName = req.body.fileName

    try {
        await storage.bucket.file(fileName).delete()
        console.log('deleted the image')
        return res.status(200).json({message: 'Successfully Deleted Image'})
    } catch(error) {
        console.log('delete image error', error)
        return res.status(500).json({message: 'Server Error'})
    }
})

module.exports = router