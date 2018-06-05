<template>
    <div v-if="editting">       
         <el-button type="primary" @click="saveEdit()">保存</el-button>
        <el-button type="primary" @click="editting=false">取消</el-button>
        <el-input label="标题" placeholder="标题" v-model="post.title" ></el-input>
        <mavon-editor v-model="post.body"/>        
    </div>
    <div v-else>
        标题：{{post.title}}
        创建时间：{{post.createTime}}
        上次修改时间：{{post.lastEditTime}}
        <el-button type="primary" @click="editting=true">编辑</el-button>
        <div v-html="postHtml" v-highlight></div>
    </div>

</template>

<script>
import request from '../api/request.js';
import marked from 'marked'
export default {

data(){
    return {
        postId:this.$route.params.postId,
        post:{},
        editting:false,
        postHtml:''
    }
},
created(){
    this.loadData();
},
methods:{
    loadData(){
        request.getPost({postId:this.postId}).then(res=>{
            this.post = res.data;
            this.postHtml = marked(this.post.body)
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },
    saveEdit(){
        request.editPost({
            data:{
                title:this.post.title,
                body:this.post.body
            },
            params:{
                postId:this.postId
            }
        }).then(res=>{
            console.log(res);
            this.$message.success('更改保存成功！')
            this.post = res.data;
            this.postHtml = marked(this.post.body)
            this.editting = false;
           
        }).catch(err=>{
            console.log(err)
        })
    }
}
}
</script>

<style>

</style>
