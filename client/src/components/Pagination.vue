<template>
    <div class="pagination-block">
        1/8
        <span>下一页</span>
        <span>上一页</span>
        <span>末页</span>
        <span>所有文章</span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.pagination-block{
    margin:20px;
    text-align: right;
}
span{
    color:#fff;
    background-color:$blue;
    padding: 5px;
    margin:10px;
    border-radius: 10px;
}

</style>
