<script setup>
  import { ref, watch } from 'vue'
  const text = ref('### 标题')
  watch(text,(newVal,oldVal) => {
    console.log(newVal)
  })
  function saveData(text, html) {
    console.log(text, html)
  }
</script>

<template>
  <v-md-editor v-model="text" height="400px" @save="saveData"></v-md-editor>
</template>

<style scoped>
</style>
