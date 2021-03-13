const express = require('express')
const router = express.Router()
const Multer = require('multer')
const {v4:uuid} = require('uuid')

const storage = require('../../index')
const getUrl = require('./get-image-url')

const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {fileSize: 5 * 1024 * 1024}
})

// router.post('/', multer.single('image'), async (req, res) => {
router.post('/', multer.single('image'), async (req, res) => {

    console.log('upload image got hit')
    
    const fileName = `product-image/${uuid()}|||${Date.now()}`

    try {
        await upload(req.file, fileName)
        console.log('done image uploading')
        const url = await getUrl(fileName)
        return res.status(200).json({url, fileName})
    } catch(error) {
        console.log('uploading image error', error)
        return res.status(500).json({message: 'Server Error'})
    }
  

})

module.exports = router






    // -------------- file upload system error --------------------------------------------
    try {
        function upload(file, fileName) {
            // console.log('from upload function', file);
        
            return new Promise((resolve, reject) => {
                const fileUpload = storage.bucket.file(fileName)
                const blobStream = fileUpload.createWriteStream({
                    metadata: {
                        contentType: file.mimetype
                    }
                })
        
                blobStream.on('error', error => {
                    console.log('from upload', error)
                    reject('Failed to upload file')
                })
        
                blobStream.on('finish', () => {
                    console.log('uploaded')
                    resolve('done')
                })
        
                blobStream.end(file.buffer)
            })
        }
    } catch(error) {
        console.log('file upload system error')
        console.log(error)
    }