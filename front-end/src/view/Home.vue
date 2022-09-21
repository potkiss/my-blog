<template>
    <div class="top-bac">
    </div>
    <div class="home-container">
        <div class="avater">
            <img src="../assets/avater.jpeg" alt="">
            <div class="nickname"> POTKISS </div>
        </div>
        <my-info></my-info>
        <router-view></router-view>
    </div>
</template>

<script setup name="Home">
    import MyInfo from '../components/MyInfo.vue'
</script>

<style scoped lang="scss">
    .top-bac {
        height: 15vmin;
        /* background: #d0e0e0; */
        /* background: url('../assets/topbac.png') no-repeat; */
        background-attachment: fixed;
        border-radius: 0 0 2vmin 2vmin;
        background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
        /* 背景尺寸 - 原理3 */
        background-size: 600% 600%;
        /* 循环动画 - 原理4 */
        animation: gradientBG 30s ease infinite;
    }

    .home-container {
        height: 100vh;
        position: relative;
        padding: 18vmin 5vmin;
        .avater {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 18vmin;
            height: 18vmin;
            background: #101729;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 13vmin;
                height: 13vmin;
                border-radius: 50%;
            }
            .nickname {
                color: #fff;
                font-size: 4vmin;
                position: absolute;
                left: 50%;
                transform: translate(-50%, 10vmin);
            }
        }

    }

     /* 动画，控制背景 background-position */
    @keyframes gradientBG {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
</style>