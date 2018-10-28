<template>
  <div id="app"> 
    <div class="center-block">
      <motto class="motto" :data="mottoData"/>
      <photo class="photo"/>
      <my-header class="header" ></my-header> 
    </div>
    <router-view/>
    <footer></footer>
  </div>
</template>

<script>
import myHeader from '@/components/Header'
import Motto from '@/components/Motto.vue'
import Photo from '@/components/Photo.vue'
import MOTTO_DATA from '@/components/Motto-data.js'
export default {
  name: 'app',
  components: {
    myHeader,Motto,Photo
  },
  computed:{
    mottoData(){
      return MOTTO_DATA[this.$route.name];
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/style/variable.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $background-color;
  margin:0;
  padding: 0;
}

.center-block{
  width:$center-width;
  margin:0 auto;
}

.motto{
    float: left;
}
.photo{
    margin-left:400px;
}
.header{
  position: relative;
  top: -25px;
  margin-left:-60px;
}


footer{
  background:url('~@/assets/img/foot-mushroom.png') repeat-x;
  position: fixed;
  bottom: 0;
  width:100%;
  height: 40px;
}

</style>
