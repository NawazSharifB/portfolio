const express = require('express')
const router = express.Router()
const indexPage = require('../../index')

router.get('/:uid', async(req, res) => {
    const uid = req.params.uid
    // console.log('got hit', uid)

    try {
        const firestore = indexPage.firestore;
        const data = (await firestore.collection('data').doc(uid).get()).data()
        if (data) {
            // console.log('got data')
            return res.status(200).json([data])
        } else {
            // console.log('data not found')
            return res.status(404).json({message: 'Data Not Found'})
        }
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Server Error'})
    }
})

module.exports = router