<template>
  <div class="md-editor">
    <div class="top-nav">
      <img src="/back.svg" alt="" @click="back">
      <img src="/more.svg" alt="" @click="more">
    </div>
    <div class="content">
      <v-md-editor v-model="text" @save="saveData" mode="preview"></v-md-editor>
    </div>
  </div>

    <!-- <v-md-editor v-model="text" @save="saveData" ></v-md-editor> -->
</template>

<script setup name="MdEditor">
  import { ref } from 'vue'
  import { handleBlog } from '../apis/blog'
  import { useRoute, useRouter} from 'vue-router'
  import { ElMessage } from 'element-plus'
  const route = useRoute()
  const router = useRouter()
  let text = ref('')
  if (route.query.id) {
      handleBlog().getBlogDetails({id:route.query.id}).then(res => {
      text.value = res.data.result.content
    })
  } else {
    text.value = `### 404 \n ### 文章不存在`
  }
  function back() {
    router.back()
  }
  function more () {
    ElMessage({
      message: '开发中',
      type:'warning'
    })
  }
  function saveData(text, html) {
    console.log(text)
  }
</script>

<style scoped lang="scss">
  .md-editor {
    background: #fff;
    .top-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 13vmin;
      background: #3e4452;
      z-index: 2;
      border-radius: 0 0 5vmin 5vmin;
      padding: 3vmin;
      box-sizing: border-box;
      box-shadow: 0px 0px 10px 0px #000;
      img {
        width: 5vmin;
        height: 5vmin;
        line-height: 13vmin;
        align-items: center;
        cursor: pointer;
      }
  }
  .content {
    padding-top: 13vmin;
  }
  }

</style>
