<template>
<div>
    <el-button type="success" @click="savePost" >保存</el-button>
    <el-input label="标题" placeholder="标题" v-model="title"></el-input>
     <mavon-editor v-model="body"/>
</div>
    
</template>

<script>
import request from '../api/request.js';
export default {
    data(){
        return {
            title:'',
            body:''
        }
    },
    methods:{
        savePost(){
            request.addPost({
                title:this.title,
                body:this.body
            }).then(res=>{
                console.log(res)              
            }).catch(err=>{                
                console.log(err);
            })
        }
    }
}
</script>

<style>

</style>
