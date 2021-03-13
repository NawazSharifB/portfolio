const express = require('express')
const cors = require('cors')
const path = require('path')

const fsAdmin = require('firebase-admin')
const {Storage} = require('@google-cloud/storage')
// const storageCredential = require('./server/tools/storage-credential.json');

const uploadImage = require('./server//upload-image/upload-image')
const addProject = require('./server/api/add-project')
const getAllData = require('./server/api/get-all-data')
const getSingleProject = require('./server/api/get-single-project')

fsAdmin.initializeApp({
    // credential: fsAdmin.credential.cert(storageCredential)
    credential: fsAdmin.credential.cert(JSON.parse(process.env.API_KEY))
});

const storage = new Storage({
    // keyFilename: './server/tools/storage-credential.json'
    keyFilename: './server/tools/storage-credential.json'
})
const bucket = storage.bucket('protfolio-f1efb.appspot.com/')
const firestore = fsAdmin.firestore()


const app = express()

app.use(express.static(__dirname + '/dist/portfolio'))

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.use('/upload-image', uploadImage)
app.use('/add-project', addProject)
app.use('/get-all-project', getAllData)
app.use('/get-single-project', getSingleProject)


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/portfolio/index.html'))
})

app.listen(PORT, () => {
    console.log('server is running on port', PORT)
})

exports.bucket = bucket
exports.firestore = firestore