const { execute, escape } = require('../conf/db')
const { encrypt } = require('../utils/crypto')

const login  = async function (username, password) {
    username = escape(username)

    password = encrypt(password)
    password = escape(password)

    let sql = `select username,nickname,avater,user_role from users where username=${username} and password=${password}`
    const res = await execute(sql)
    return res[0] || {}
}

module.exports = {
    login
}