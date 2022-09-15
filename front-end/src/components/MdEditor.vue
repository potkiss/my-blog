<template>
  <v-md-editor v-model="text" @save="saveData"></v-md-editor>
</template>

<script setup>
  import { ref } from 'vue'
  import { handleBlog } from '../apis/blog'
  const text = ref("# 1、前端算法题目分享 | 青训营笔记\n***这是我参与「第四届青训营 」笔记创作活动的第5天***\n> 昨天刷到了一道算法题，感觉挺有趣，后面理了一下，做出了，分享出来大家一起讨论最优解\n\n# 2、题目\n> 这道题目目的是，监测出用户的输入内容是不是有违禁词的一个算法，假如**bytedance**是违禁词，那我后面输入的内容，如果字符串里面出现了（可能是打乱的），但是只要按照违禁词的字母顺序出现了，那这一个字符串就是不合法的，反之则没有问题。\n\n```js\nlet keyword = \"bytedance\" //违禁词\n// 测试案例\nlet input1 = \"hi,bytedance\" // true\nlet input2 = \"bytehellodance\" // true\nlet input3 = \"bedyttedjyancebytte\" // true\nlet input4 = \"bkyjtedasjnkcce\" // true\nlet input5 = \"blaysjtndmance\" // false\nlet input6 = \"bytdance\" // false\n```\n# 3、题目的分析过程\n## 3.1、分析和碰壁\n> 第一次我想计算这个违禁词中的某个字母出现的次数，然后再便利这个要判断的字符串，统计出现的次数，然后做校验，结果发现，行不通，因为，这个违禁词字母出现的顺序我们需要和违禁词的顺序一样，这时我想到，先取出违禁词的第一个，然后便利这个违禁词，如果它出现了，就记住跳出的位置，然后跳出这个for循环，然后在遍历违禁词的第二个，注意，这时候遍历的时候，需要从上次变量的地方开始，不能再次重头开始，否则就白干了。\n## 3.2、开始实现代码\n> 首先进行第一次遍历，在进入字符串是否违禁的时候，找到外层循环这次判断的这一个位置，然后吧字符串截断再赋值给这个值，并且跳出这个循环，接下来进行第二个...\n> 在判断到吧内部的循环循环完了还没找到，那就直接输出 false，否则就输出 true\n> 注意内部循环要小于等于，不能只是小于，否则无法判断这个字符串是不是循环完了\n\n```js\nfunction process (key, data) {\n\tlet returnValue = true\n\tfor(let i = 0; i < key.length; i++){\n\t\tfor(let j = 0; j <= data.length; j++){\n\t\t\tif (key[i] === data[j]) {\n\t\t\t\tdata = data.slice(j)\n\t\t\t\tbreak\n\t\t\t}\n\t\t\tif(j === data.length) {\n\t\t\t\treturnValue =  false\n\t\t\t}\n\t\t}\n\t}\n\treturn returnValue\n}\n```\n## 3.3、完整代码\n```js\nlet keyword = \"bytedance\"\nlet input1 = \"hi,bytedance\" // true\nlet input2 = \"bytehellodance\" // true\nlet input3 = \"bedyttedjyancebytte\" // true\nlet input4 = \"bkyjtedasjnkcce\" // true\nlet input5 = \"blaysjtndmance\" // false\nlet input6 = \"bytdance\" // false\nfunction process (key, data) {\n\tlet returnValue = true\n\tfor(let i = 0; i < key.length; i++){\n\t\tfor(let j = 0; j <= data.length; j++){\n\t\t\tif (key[i] === data[j]) {\n\t\t\t\tdata = data.slice(j)\n\t\t\t\tbreak\n\t\t\t}\n\t\t\tif(j === data.length) {\n\t\t\t\treturnValue =  false\n\t\t\t}\n\t\t}\n\t}\n\treturn returnValue\n}\nconst a = process(keyword, input1)\nconst b = process(keyword, input2)\nconst c = process(keyword, input3)\nconst d = process(keyword, input4)\nconst e = process(keyword, input5)\nconst f = process(keyword, input6)\nconsole.log(a)\nconsole.log(b)\nconsole.log(c)\nconsole.log(d)\nconsole.log(e)\nconsole.log(f)\n```\n# 总结\n> 这个算法的时间复杂度是O(n^2),我完全是个小白，这是我目前能想到的算法，希望大家如果有更加优秀的解法，记得@我，大家一起交流学习！")
  function saveData(text, html) {
    handleBlog().getBlogList().then(res => {
      console.log('data', res)
    })
  }
</script>

<style scoped>
</style>
