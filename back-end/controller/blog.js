const { execute } = require('../conf/db')

const getList = async function (keyword) {
    let sql = 'select _id,title,abstract,cover,create_time,relation from blog where 1=1'
    if (keyword) {
        sql += ` and title like '%${keyword}%'`
    }
    sql += ' order by create_time desc'
    return await execute(sql)
}
const getDetails = async function(id) {
    let sql = `select * from blog where _id=${id}`
    let res = await execute(sql)
    return res[0] || {}
}

module.exports = {
    getList,
    getDetails
}