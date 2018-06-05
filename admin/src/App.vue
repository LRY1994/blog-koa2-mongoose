<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link :to="{path:'/Login'}">登录</router-link></el-menu-item>
      <el-menu-item index="2"><router-link :to="{path:'/WritePost'}">新建文章</router-link></el-menu-item>
      <el-menu-item index="3"><router-link :to="{path:'/PostList'}">文章列表</router-link></el-menu-item>
      
      
    </el-menu>
    <router-view >
    </router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeIndex:'1'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
</style>
