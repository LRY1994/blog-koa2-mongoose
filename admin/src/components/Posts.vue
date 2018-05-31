<template>
<div >
    <div v-for="(post,index) in list" :key="index" >
        标题：{{post.title}}
        创建时间：{{post.createTime}}
        上次修改时间：{{post.lastEditTime}}
    </div>
</div>
   
</template>

<script>
import request from '../api/request.js';
export default {
data(){
    return{
        list:[]
    }
},
created(){
    this.loadData();
},
methods:{
    loadData(){
        request.listPost({}).then(res=>{
            this.list = res.data;
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
