<template>
    <div v-if="editting">       
        <el-row>
            <el-col :span="22">
                 <write-post ref="writePost" :postOld="post"></write-post>
            </el-col>
            <el-col :span="2" style="padding-left:10px">
                <el-button  style="background-color:pink;color:#fff" size="medium" @click="saveEdit()">保存</el-button><br/><br/>
                 <el-button type="info" size="medium" @click="cancelEdit">取消</el-button>
            </el-col>
        </el-row>
        
              
    </div>
    <div v-else>
        <h1 style="display:inline;">{{post.title}}</h1>
        <div style="float:right">
            <span class="desc-font"> create at :{{post.createAt}}</span>
            <span class="desc-font">last modified :{{post.updateAt}}</span>
            <el-button type="primary" size="small" @click="editting=true">编辑</el-button>
        </div>
         <span style="background-color:pink;padding:5px;color:#fff;border-radius:5px 0">{{post.category }}</span>
        <template v-for="tag in post.tags">
            <el-tag size="mini" >{{tag}}</el-tag> 
        </template>
        <div v-html="postHtml" ref="mavon" v-highlight style="border: 1px solid #d3d3d3;border-radius: 10px;padding:10px;margin-top:10px"></div>
    </div>

</template>

<script>
import request from '../api/request.js';
import marked from 'marked'
import WritePost from './WritePost'
import {BASE_URL}from '../config/index.js'

export default {

data(){
    return {
        postId:this.$route.params.postId,
        post:{},
        editting:false,
        postHtml:''
    }
},
components:{ WritePost },
created(){
    this.loadData();
},
methods:{
    loadData(){
        request.getPost({
            params:{
                postId:this.postId
            }
        }).then(res=>{
            this.post = res.data;

            //  this.$refs.mavon.$img2Url(img[0], img[1]);
            this.postHtml = marked(this.post.body)
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
    },
    cancelEdit(){
        this.editting=false;
        this.loadData()
    },   
    saveEdit(){
        const post = this.$refs.writePost.postNew;
        request.editPost({
            data:{
                title:post.title,
                body:post.body,
                tags:post.tags,
                category:post.category
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
