<template>
    <header>
        <ul>
            <li><router-link to="/study">Learn</router-link></li>
            <li><router-link to="/read">Read</router-link></li>
            <li><router-link to="/trip">Trip</router-link></li>
            <li><router-link to="/about">Me</router-link></li>
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
      font-size: 30px;
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
