<template>
    <div class="nav-box" id="nav-fixed" :class="isFixed ? 'fixed' : ''">
        <div class="nav-bar"></div>
        <div class="nav-scrool" :style="isFixed?`overflow: scroll;`: ''">
            <div v-for="i in 100" :key="i"> {{ i }}</div>
        </div>
    </div>
</template>

<script setup name="MyNav">
    import { ref,onMounted,onBeforeMount,nextTick } from 'vue'
    let isFixed = ref(false)
    let offsetTop = ref(0)
    onMounted(() => {
        window.addEventListener('scroll', initHeight);
        nextTick(() => {
            offsetTop.value = document.querySelector('#nav-fixed').offsetTop + 30
        })
    })
    onBeforeMount(() => {
        window.removeEventListener('scroll', initHeight)
    })
    function initHeight() {
        // 设置或获取位于对象最顶端和窗口中可见内容的最顶端之间的距离 (被卷曲的高度)
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        //如果被卷曲的高度大于吸顶元素到顶端位置 的距离
        isFixed.value = scrollTop > offsetTop.value ? true : false;
        console.log(scrollTop, isFixed.value, offsetTop.value)
    }
</script>

<style lang="scss" scoped>
    .nav-box {
        margin-top: 5vmin;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        // background: red;
        .nav-bar {
            height: 10vmin;
            border-radius: 5vmin;
            background: #3e4452;
        }
        .nav-scrool {
            width: 100%;
            height: 96vh;
            background: red;
        }
    }
    .fixed {
        position: fixed;
        top: 0;
        left: 0;
        animation: aa 0.3s ease forwards;
    }
    @keyframes aa {
        0% {
            padding: 0 5vmin;

        }
        50% {
            padding: 0 2.5vmin;

        }
        100% {
            padding: 0 0vmin;
        }
    }
</style>