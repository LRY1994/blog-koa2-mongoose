<template>
    <div class="center-block">
        <search class="search" @searchByKey="searchByKey" @searchByTag="searchByTag"></search>
        <articles class="articles" ref="articles"></articles>       
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
},
methods:{
    searchByKey(key){
        this.$refs.articles.searchByKeyword(key);
    },
     searchByTag(tag){
        this.$refs.articles.searchByTag(tag);
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
}
</style>
