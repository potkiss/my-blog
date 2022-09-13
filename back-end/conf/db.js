const mysql = require('mysql')
const { MYSQL_CONF } = require('./conf')

const db = mysql.createConnection(MYSQL_CONF)

db.connect()

function execute(sql) {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, res) => {
            if (err) {
                reject(err)
                return 
            }
            resolve(res)
        })
    })
}

module.exports = {
    execute,
    escape: mysql.escape // 对数据转译
}