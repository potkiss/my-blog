const router = require('koa-router')()
const { SuccessModel, ErrorModel} = require('../model/resModel.js')

router.prefix('/api/user')

router.get('/login', async function (ctx, next) {
  if (ctx.session.num == null) {
    ctx.session.num = 0
  }
  ctx.session.num++
  ctx.body = new SuccessModel({count: ctx.session.num},'哈哈')
})

module.exports = router
