<template>
    <div class="center-block">
        <search class="search"></search>
        <articles class="articles"></articles>       
    </div>
</template>

<script>
import Search from './Search';
import Articles from './Articles';
export default {

components:{Search,Articles},
data(){
    return{
       
    }
}
}
</script>

<style lang="scss" scoped>
.search{
    width:30%;
    float: left;
    box-sizing: border-box;
    background-color:#fff;
}
.articles{
    width:69%;
    float: right;
    height:100px;
    background-color:#fff;
}
</style>
