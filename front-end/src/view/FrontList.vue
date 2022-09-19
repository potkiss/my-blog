<template>
    <div class="blog-list">
        <list-item v-for="item in 8" :key="item">item</list-item>
    </div>
</template>

<script setup name="BlogList">
    import ListItem from '../components/ListItem.vue';
</script>

<style lang="scss" scoped>
    .blog-list {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
</style>