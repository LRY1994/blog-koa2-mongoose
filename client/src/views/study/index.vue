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
    box-sizing: border-box;
    background-color:#fff;
    position: relative;
    top:-45px;
}
</style>
