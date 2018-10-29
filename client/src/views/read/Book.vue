<template>
    <div class="book-block">
        <img :src="data.cover"/>
        <div class="text">
            <span class="title">{{data.title}}</span><br/>
            <!-- <span>{{data.author}}</span><br/> -->
            {{data.period}}
        </div>
        </div>
</template>

<script>
export default {
props:['data']
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.book-block{
    width:135px;
    background-color:#fff;;
    text-align: center;
    padding:10px;
    .text{
        text-align: left;
        font-size: 14px;
        .title{
            color:$blue;
            font-weight:bold;
        }
        
    }
    
    img{
        width:100%;
        // height:172px;
        
    }
}
</style>
