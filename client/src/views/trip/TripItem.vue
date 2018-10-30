<template>
    <div class="trip-item-block">
        <div class="img-holder">
            <img :src="data.img"/>
        </div>
        <div class="text-holder">
            <h3>{{data.location}}</h3>
            <p>{{data.period}}</p>
            <p><a :href="data.link" target="_blank">记录</a></p>
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
.trip-item-block{
    width: 50%;
    height:200px;
    background: #fff;
    position: relative;
    border-radius:0 0 50px 0;
    margin-right: 20px;
    .img-holder{ 
        position: absolute;
        width:50%;
        height:100%;      
        overflow: hidden;
        img{
            width:100%;
            height:100%;
        }
    }
    .text-holder{
        margin-left:50%;
        height: 100%;
        display: inline-block;
        padding: 20px;
        h3{
            color:$pink;
        }
    }
    a{
        text-decoration: none;
        color:$blue;
    }
}
</style>
