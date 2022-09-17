<template>
    <v-md-editor v-model="text" @save="saveData" ></v-md-editor>
    <!-- <v-md-editor v-model="text" @save="saveData" mode="preview"></v-md-editor> -->
</template>

<script setup name="MdEditor">
  import { ref } from 'vue'
  import { handleBlog } from '../apis/blog'
  let text = ref('')
  handleBlog().getBlogDetails({id:1}).then(res => {
    text.value = res.data.result.content
  })
  function saveData(text, html) {
    console.log(text)
  }
</script>

<style scoped>
</style>
