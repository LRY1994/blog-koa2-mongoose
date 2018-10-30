<template>
    <div class="article-item-block">
        <div class="time">
            <img src="@/assets/img/star.png"/>
            <span>2018<br/>11-9</span>
        </div>
        <div class="text">
            <h3>{{data.title}}</h3>
            <template v-for="t in data.tags">
                <span class="tag">{{t}}</span>
            </template>
            <p>{{data.desc}}</p>
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
.article-item-block{
    position: relative;
    border-bottom:5px dashed  $pink;
    padding-bottom:20px;
    .time{
        position: absolute;
        img{
            position: relative;
            top: -20px;
        }
        span{
            position: absolute;
            left:40px;
            top:23px;
        }
    }
    .text{
        margin-left:150px;
        display: inline-block;
        h3{color:$pink;}
        .tag{
            background-color: $blue;
            color:#fff;
            border-radius:15px;
            padding:5px 15px;
            margin:10px;
            &:hover{
                cursor: pointer;
            }
        }
    }
}
</style>
