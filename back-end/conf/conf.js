let env = process.env.NODE_ENV

let MYSQL_CONF
let REDIS_CONF
let REDIS_KEY = 'PKoitss'
let CRYPTO_KEY = 'KPiosts'

if (env === 'dev') {
    MYSQL_CONF = {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'Guowen1.',
        database: 'myblog'
    }
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: 'Guowen1.',
        database: 'myblog'
    }
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF,
    REDIS_KEY,
    CRYPTO_KEY
}