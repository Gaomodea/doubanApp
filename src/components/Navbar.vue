<template>
<div>
  <router-link to="/home/movie">电影</router-link>
  <router-link to="/home/books">读书</router-link>
  <router-link to="/home/muisc">音乐</router-link>
  <router-link to="/home/other">其他</router-link>
</div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="less" scoped>
div {
  list-style: none;
  background-color: #edebeb;
  margin: 0 20px;
  border-radius: 8px;
  padding: 6px 0 6px 15px;
  a {
    display: inline-block;
    margin: 0 5px;
    padding: 4px;
    font-size: 14px;
    color: #9e9e9e;
    &.mui-active {
      font-size: 16px;
      color: #2196f3;
    }
  }
}
</style>