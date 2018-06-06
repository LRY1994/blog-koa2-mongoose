<template>
  <div id="app">
    <div style="width:15%; float:left">
     
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo"

      text-color="#2196F3"
      active-text-color="#2196F3" > 
          <el-menu-item index="1">
            <i class="el-icon-menu"></i> 
            <span slot="title">
              <router-link :to="{path:'/Login'}">登录</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-edit"></i>
            <span slot="title">
              <router-link :to="{path:'/AddPost'}">新建文章</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="3"> 
            <i class="el-icon-document"></i>
            <span slot="title">
              <router-link :to="{path:'/PostList'}">文章列表</router-link>
            </span>
          </el-menu-item>     
      </el-menu>
    </div>
    
  
    <router-view style="width:82%;float:right;margin:20px"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      activeIndex:'1',
      isCollapse:false
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
/* .home-header{
  background-image:url('assets/banner.png') ;
  background-size:100% 400px;
  background-repeat:no-repeat;
  background-position:center;
} */
.main{
  margin: 0 auto;
  max-width: 1170px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
a{
    text-decoration: none;
}
.desc-font{
    color: #d3d3d3;
    font-size: 0.8em;
    padding: 10px;
}
</style>
