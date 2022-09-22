<template>
    <div class="card-box">
        <div class="card">
            <a href="https://github.com/potkiss" target="_blank">
                <span>{{ myInfo.githubObj }}</span>
                <span>GitHub</span>
            </a>
        </div>
        <div class="card">
            <a href="https://space.bilibili.com/438480452?spm_id_from=333.1007.0.0" target="_blank">
                <span>{{ myInfo.bilibiliFollower }}</span>
                <span>Bilibli</span>
            </a>
        </div>
        <div class="card">
            <a href="https://juejin.cn/user/972429303481486" target="_blank">
                <span>{{ myInfo.juejinNum }}</span>
                <span>掘金</span>
            </a>
        </div>
        <div class="card">
            <a href="https://blog.csdn.net/m0_60681099?spm=1000.2115.3001.5343" target="_blank">
                <span>{{ myInfo.csdnNum }}</span>
                <span>CSDN</span>
            </a>
        </div>
    </div>
</template>

<script setup name="MyInfo">
    import { getMyInfo } from '../apis/info.js'
    import { watch,ref } from 'vue'
    let myInfo = ref({
        githubObj: '-',
        bilibiliFollower:'-',
        juejinNum: '-',
        csdnNum: '-'
    })
    getMyInfo().fourNum().then(res => {
        myInfo.value = res.data.result
    })
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: #fff;
    }
    .card-box {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 100%;
        height: 50vim;
    }
    .card {
        width: 10vmin;
        height: 10vmin;
        color: #fff;
        cursor: pointer;
        font-size: 2vmin;
        a {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            & span:nth-child(1) {
                font-size: 3vmin;
            }
        }
    }
</style>