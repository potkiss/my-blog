const crypto = require('crypto')
const { CRYPTO_KEY } = require('../conf/conf')

function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

function encrypt(content) {
    return md5(`password=${content}&key=${CRYPTO_KEY}`)
}
module.exports = {
    encrypt
}