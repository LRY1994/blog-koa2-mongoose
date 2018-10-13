<template>
<div >
    <el-input placeholder="搜索关键字" v-model="keyword">
       <el-button slot="append" icon="el-icon-search" @click="searchByKeyword"></el-button>
    </el-input>
    <div v-for="(post,index) in list" :key="index" >
        <post-item :item="post"></post-item>
    </div>
</div>
   
</template>

<script>
import request from '../api/request.js';
import PostItem from './PostItem'
export default {
data(){
    return{
        list:[],
        keyword:''
    }
},
components:{PostItem},
created(){
    this.loadData();
},
methods:{
    loadData(params){
        if(!params) params ={};
        request.listPost({params}).then(res=>{
            this.list = res.data;
           console.log(res)
           
        }).catch(err=>{
            console.log('err:')
            console.log(err)
        })
    },
    searchByKeyword(){
        this.loadData({keyword:this.keyword});
        
    }
}
}
</script>

<style>

</style>
