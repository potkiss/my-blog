<template>
    <div class="nav-box" id="nav-fixed" :class="isFixed ? 'fixed' : ''">
        <div class="nav-bar">
                <div @click="handelNav(index)" class="bar-item" v-for="(item,index) in navList" :key="item.title" :class="activeNav===index?'active-item':''">
                    <!-- <img src="../assets/avater.jpeg" alt=""> -->
                    <span>{{ item.title }}</span>
                </div>
        </div>
        <div class="nav-scrool">
            <div :class="isFixed?`nav-item`:''">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup name="MyNav">
    import { ref,onMounted,onBeforeMount,nextTick, reactive,watchEffect } from 'vue'
    import { useRouter,useRoute } from 'vue-router'
    let isFixed = ref(false)
    let offsetTop = ref(0)
    let activeNav = ref(0)
    const navList = reactive([
        {
            title: 'FRONT-END',
            icon: 'https://img.alicdn.com/imgextra/i2/O1CN012LNsyu1lbOXdNPEae_!!6000000004837-2-tps-198-200.png',
        },
        {
            title: 'IOT',
            icon: 'https://img.alicdn.com/imgextra/i2/O1CN012LNsyu1lbOXdNPEae_!!6000000004837-2-tps-198-200.png',
        },
        {
            title: 'TIMELINE',
            icon: 'https://img.alicdn.com/imgextra/i2/O1CN012LNsyu1lbOXdNPEae_!!6000000004837-2-tps-198-200.png',
        },
        {
            title: 'ABOUT',
            icon: 'https://img.alicdn.com/imgextra/i2/O1CN012LNsyu1lbOXdNPEae_!!6000000004837-2-tps-198-200.png',
        }
    ])
    const obj = ['front','iot','timeline','about']
    const router = useRouter()
    const route = useRoute()
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
        // console.log(scrollTop, isFixed.value, offsetTop.value)
    }
    // nav导航
    function handelNav(e){
        console.log(e)
        activeNav.value = e
        router.push({
            name: obj[e],
        })
    }
    watchEffect(() => {
        router.getRoutes().map((item, index) => {
            if(item.path === router.currentRoute.value.path){
                if (index < navList.length) {
                    activeNav.value = index
                }
            }
        })
    })
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
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.6vmin;
            .bar-item {
                width: 25%;
                height: 100%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5vmin;
                &:hover span{
                    color: #81cfbf;
                }
                -webkit-tap-highlight-color:transparent;
                img {
                    width: 3vmin;
                    height: 3vmin;
                }
                span {
                    margin-left: 1vmin;
                    font-size: 3vmin;
                    color: #fff;
                }
            }
            .active-item {
                background: #66d1bf;
                span {
                    color:rgb(16, 23, 41);
                }
                &:hover span{
                    color: rgb(16, 23, 41);
                }
                -webkit-tap-highlight-color:transparent;
            }
        }
        .nav-scrool {
            width: 100%;
            height: 90vh;
            padding-top: 5vmin;
            .nav-item {
                width: 100%;
                height: 100%;
                overflow: scroll;
            }
        }
    }
    .fixed {
        position: fixed;
        top: 0;
        left: 0;
        padding: 0 5vmin;
        // animation: aa 0.3s ease forwards;
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