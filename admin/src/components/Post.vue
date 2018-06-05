<template>
    <div>
        标题：{{post.title}}
        创建时间：{{post.createTime}}
        上次修改时间：{{post.lastEditTime}}
        内容：<div v-html="post.body"></div>
    </div>
</template>

<script>
import request from '../api/request.js';
export default {

data(){
    return {
        postId:this.$route.params.postId,
        post:{}
    }
},
created(){
    this.loadData();
},
methods:{
    loadData(){
        request.getPost({postId:this.postId}).then(res=>{
            this.post = res.data;
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    }
}
}
</script>

<style>

</style>
