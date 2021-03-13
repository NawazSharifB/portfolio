const storage = require('../../index')

function getUrl(filePath) {
    return new Promise((resolve, reject) => {
        const file = storage.bucket.file(filePath)
        file.getSignedUrl({action:'read', expires: '03-09-2491'}).then(url => {
            console.log('got url')
            resolve(url[0])
        }).catch(error => {
            console.log('from get url', error)
            reject('failed to get url')
        })
    })
    
}

module.exports = getUrl