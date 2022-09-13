const router = require('koa-router')()
const { getList,getDetails } = require('../controller/blog')
const { SuccessModel, ErrorModel} = require('../model/resModel')

router.prefix('/api/blog')

router.get('/list', async function(ctx, next) {
    const keyword = ctx.query.keyword || ''
    const res = await getList(keyword)
    if (res.length === 0) {
        ctx.body = new SuccessModel({result: res},'暂无文章')
        return
    }
    ctx.body = new SuccessModel({result: res}, '获取成功')
})

router.get('/details', async function(ctx, next) {
    const id = ctx.query.id || ''
    if (id) {
        const res = await getDetails(id)
        if (res._id) {
            ctx.body = new SuccessModel({result: res},'获取详情成功')
        } else {
            ctx.body = new SuccessModel({result: res},'查看的博客不存在')
        }
        return
    }
    ctx.body = new ErrorModel('不知道你想看那个博客')
})

module.exports = router