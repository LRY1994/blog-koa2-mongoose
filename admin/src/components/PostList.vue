<template>
<div >
    <div v-for="(post,index) in list" :key="index" >
        <post-card :item="post"></post-card>
    </div>
</div>
   
</template>

<script>
import request from '../api/request.js';
import PostCard from './PostCard'
export default {
data(){
    return{
        list:[]
    }
},
components:{PostCard},
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
