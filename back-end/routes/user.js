const router = require('koa-router')()
const { SuccessModel, ErrorModel} = require('../model/resModel')
const { login } = require('../controller/user')

router.prefix('/api/user')

router.post('/login', async function (ctx, next) {
  const { username, password} = ctx.request.body
  const res = await login(username, password)
  if (res.username) {
    // 保存session
    ctx.session.username = res.username
    ctx.session.avater = res.avater
    ctx.session.nickname = res.nickname
    ctx.session.user_role = res.user_role

    ctx.body = new SuccessModel({ result: res},'登录成功')
    return 
  }
  ctx.body = new ErrorModel({ result: []}, '登录失败')
})

module.exports = router
