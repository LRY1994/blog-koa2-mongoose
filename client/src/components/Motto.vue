<template>
<div class="motto-block">
    <img src="@/assets/img/flower-box.png" />
    <div class="text">
        <blockquote>{{data.he_says}}</blockquote>
         <address v-if="data.author">—{{data.author}}</address>
    </div>
</div>
</template>

<script>
export default {
props:['data']
}
</script>

<style lang="scss" scoped>
.motto-block{
    position: relative;
    left:100px;
    height:330px;
    width: 300px;
    display: flex;
    flex-direction: column;
    img{
        width:300px;
        position: absolute;
        top:0;
        left:0;
    }
    .text{
        height: 200px;
        width: 200px;
        position: relative;
        top:45%;  
        left:50%;
        transform: translateY(-50%) translateX(-50%);
        line-height: 1.5;
        letter-spacing :3px;
        blockquote{
            margin:20px;
            display: inline-block;
        }
        address{
            text-align: right;
            color:#d3d3d3;
            margin-right:20px;
        }
        
        
    }
}

</style>
