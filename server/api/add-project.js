const express = require('express')
const router = express.Router()
const index = require('../../index')


router.post('/', async (req, res) => {
    const project = req.body
     try {
         const db = index.firestore
         const uid = db.collection('data').doc().id
         project.uid = uid

         await db.collection('data').doc(uid).set(project)
         return res.status(200).json({message: 'Successful'})
         
     } catch (error) {
         console.log(error)
         res.status(500).json({message: 'Server Error'})
     }
})

module.exports = router