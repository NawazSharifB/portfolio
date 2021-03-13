const express = require('express')
const index = require('../../index')

const router = express.Router()

router.get('/', async (req, res) => {
    
    try {
        const firestore = index.firestore
        const data = await firestore.collection('data').get()

        let projects = []
        data.forEach(item => {
            projects.push(item.data())

        })

        projects = projects.map(project => {
            const images = []
            project.images.forEach(image => images.push(image.url))
            project.images = images
            return project
        })

        res.status(200).json(projects)
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: 'Server Erorr'})
    }
})

module.exports = router
