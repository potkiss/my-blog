import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
const app = createApp(App)

// v-md-editor
import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';
// 图片懒加载
import lazyPlugin from 'vue3-lazy'
app.use(lazyPlugin, {
    loading: '/loading.gif', // 图片加载时默认图片
    error: '/avater.jpeg', // 图片加载失败时默认图片
})



VMdEditor.use(vuepressTheme, {
  Prism,
});
app.use(router)
app.use(VMdEditor)
app.mount('#app')
