const router = require('koa-router')()
const { SuccessModel, ErrorModel} = require('../model/resModel')
const axios = require('axios').default;
const cheerio = require('cheerio');

router.get('/api/pubinfo', async function (ctx, next) {
    let data = {bilibiliFollower:null,githubObj:2,juejinNum:null,csdnNum:null}
    const bilibili = await axios.get('https://api.bilibili.com/x/relation/stat?vmid=438480452').then(res => {
        data.bilibiliFollower = res.data.data.follower
    })
    // const github = await axios.get('https://github.com/potkiss').then(res => {
    //     const $ = cheerio.load(res.data);
    //     console.log($('.text-normal').text())
    // })
    const juejin = await axios.get('https://api.juejin.cn/user_api/v1/user/get?aid=2608&uuid=7007128701091907113&spider=0&user_id=972429303481486&not_self=1&need_badge=1').then(res => {
        data.juejinNum = res.data.data.post_article_count
    })
    const csdn = await axios.get('https://blog.csdn.net/m0_60681099').then(res => {
        const $ = cheerio.load(res.data);
        data.csdnNum = $('.user-profile-statistics-num').eq(1).text()*1
    })
    ctx.body = new SuccessModel({result: data}, '获取成功')
})

module.exports = router
