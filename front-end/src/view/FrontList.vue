<template>
    <div class="blog-list">
        <list-item v-for="item in blogList" :key="item" :item-data="item"></list-item>
    </div>
</template>

<script setup name="BlogList">
    import ListItem from '../components/ListItem.vue';
    import { reactive } from 'vue'
    import { handleBlog } from '../apis/blog.js'
    import { formatTime } from '../utils/time.js'
    let blogList = reactive([])
    const init =  (async () => {
        const res = await handleBlog().getBlogList({keyword:'前端'}).then(res => res.data.result)
        res.forEach(item => {
            item.relation = item.relation.split(';')
            item.create_time = formatTime('YY-m-d', item.create_time)
            blogList.push(item)
        })
        // console.log(blogList)
    })()
</script>

<style lang="scss" scoped>
    .blog-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, 45vmin);
        justify-items:center;
        justify-content: space-evenly;
        padding-bottom: 8vmin;
    }
</style>