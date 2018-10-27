<template>
    <header>
        <ul>
            <li><router-link to="/study">事业无穷年</router-link></li>
            <!-- （韩愈） -->
            <li><router-link to="/read">读书使人成为完善的人</router-link></li>
            <!-- （培根) -->
            <li><router-link to="/trip">带动灵魂寻找春光</router-link></li>
            <!-- （梭罗） -->
            <!-- 想在暖风醉人的季节里，去赴一场花宴。你若同行，愿与你一路畅聊这风花雪月。 -->
            <li><router-link to="/about">只是一名程序媛</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
header{
  padding: 10px 0;
  ul{
    width:100%;
    padding:0;
    display: flex;
    li{
      display: inline;
      border-right: 2px solid #fff;
      padding: 0 20px;
      font-size: 16px;
      &:last-child{
        border:none;
      }
      a{
       text-decoration: none;
        color:#fff;
      }
    }
  }
}
</style>
