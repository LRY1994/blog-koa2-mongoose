<template>
    <div class="trip-item-block">
        <div class="img-holder">
            <img :src="data.img"/>
        </div>
        <div class="text-holder">
            <h3><a :href="data.link" target="_blank">{{data.location}}</a></h3>
            <p>{{data.period}}</p>
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
    background: #fff;
    position: relative;
    margin-right: 20px;
    margin-bottom: 20px;
    break-inside: avoid;
    .img-holder{      
        overflow: hidden;
        img{
            width:100%;
            height:100%;
        }
    }
    .text-holder{
       padding: 0 20px 20px 20px;
        h3{
            color:$pink;
            a{
                text-decoration: none;
                color:inherit;
            }
        }
    }
    
}
</style>
