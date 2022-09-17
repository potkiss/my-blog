<template>
    <div class="card-box">
        <div class="card">
            <span>100K</span>
            <span>GitHub</span>
        </div>
        <div class="card">
            <span>100K</span>
            <span>Bilibli</span>
        </div>
        <div class="card">
            <span>100K</span>
            <span>掘金</span>
        </div>
        <div class="card">
            <span>100K</span>
            <span>CSDN</span>
        </div>
    </div>
</template>

<script setup name="MyInfo">
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