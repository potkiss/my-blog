const router = require('koa-router')()
const { SuccessModel, ErrorModel} = require('../model/resModel')
const { login } = require('../db/user')

router.prefix('/api/user')

router.get('/login', async function (ctx, next) {
  const { username, password} = ctx.request.query
  const res = await login(username, password)
  if (res.username) {
    ctx.session.username = res.username // 保存session
    ctx.body = new SuccessModel({ result: res},'登录成功')
    return 
  }
  ctx.body = new ErrorModel({ result: []}, '登录失败')
})

module.exports = router
