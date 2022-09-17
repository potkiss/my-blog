<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Home from './view/Home.vue'
</script>

<template>
  <div style="background: #101729;">
    <home></home>
  </div>
</template>

<style>
  body {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    color: #fff;
    font-family: "dm", source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
  /* 隐藏滚动条 */
  html::-webkit-scrollbar{
    width:0px
  }
</style>
