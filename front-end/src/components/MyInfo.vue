<template>
    <div class="card-box">
        <div class="card">
            <span>{{ myInfo.githubObj }}</span>
            <span>GitHub</span>
        </div>
        <div class="card">
            <span>{{ myInfo.bilibiliFollower }}</span>
            <span>Bilibli</span>
        </div>
        <div class="card">
            <span>{{ myInfo.juejinNum }}</span>
            <span>掘金</span>
        </div>
        <div class="card">
            <span>{{ myInfo.csdnNum }}</span>
            <span>CSDN</span>
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
    watch(myInfo,(newVal,oldVal) => {
        console.log(newVal,oldVal)
    })
</script>

<style lang="scss" scoped>
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
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        cursor: pointer;
        font-size: 2vmin;
        & span:nth-child(1) {
            font-size: 3vmin;
        }
    }
</style>