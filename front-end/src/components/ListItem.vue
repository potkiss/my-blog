<template>
    <div class="list-item" @click="goDetails(itemData._id)">
        <img class="item-img"  v-lazy="itemData.cover" alt="">
        <div class="item-info">
            <div class="title">
                {{ itemData.title }}
            </div>
            <div class="tags">
                <span>前端</span>
                <span>后端</span>
            </div>
            <div class="details">
                <span>10K</span>
                <span>2022-9-21</span>
            </div>
        </div>
    </div>
</template>

<script setup name="ListItem">
    import { useRouter } from 'vue-router'
    const router = useRouter()
   defineProps({
        itemData:Object
    })
    function goDetails(e) {
        console.log(e)
        router.push('/details')
    }
</script>

<style lang="scss" scoped>
    .list-item {
        cursor: pointer;
        width: 40vmin;
        height: 50vmin;
        background-size: 100% 100%;
        margin-bottom: 6vmin;
        box-sizing: border-box;
        .item-img {
            width: 100%;
            height: 38vmin;
            border-radius: 3vmin;
        }
        .item-info {
            width: 100%;
            height: 12vmin;
            .title {
                width: 100%;
                height: 4vmin;
                font-size: 3vmin;
                font-weight: 700;
                line-height: 4vmin;
                margin-bottom: 1vmin;
            }
            .tags {
                width: 100%;
                height: 3vmin;
                line-height: 3vmin;
                font-size: 2vmin;
                margin-bottom: 1vmin;
                span {
                    padding: 0.3vmin;
                    border-radius: 10%;
                    margin-right: 0.5vmin;
                    color: rgb(190, 190, 190);
                }
            }
            .details {
                width: 100%;
                height: 4vmin;
                font-size: 2vmin;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
        }
    }
</style>