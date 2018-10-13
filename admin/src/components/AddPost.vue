<template>
<div>
    <write-post ref="writePost"></write-post>
    <el-button  @click="savePost" style="width:100%;margin-top:20px;background-color:pink;color:#fff">发表</el-button>
</div>
    
</template>

<script>
import request from '../api/request.js';
import WritePost from './WritePost'
import Axios from 'axios';
export default {
    data(){
        return {
            inputTagVisible:false,
            inputTag:''
        }
    },
   components:{ WritePost },
    methods:{      
        // savePost(){
        //     const post = this.$refs.writePost.postNew;
        //     if(post.title==''||post.body==''){
        //         this.$message.warning('标题，正文不得为空');
        //         return;
        //     }
        //     const writePost = this.$refs.writePost;
        //     Promise.all([writePost.uploadImg(),this.addTextContent()]).then(res=>{
        //         console.log(res);
        //         this.$message.success('发布成功！') 
        //     }).catch(err=>{                
        //         console.log(err);
        //         this.$message.error('发布失败！')
        //     })
        // },
        async savePost(){            
            const post = this.$refs.writePost.postNew;
            if(post.title==''||post.body==''){
                this.$message.warning('标题，正文不得为空');
                return;
            }
            // const img_file = this.$refs.writePost.img_file;



            // let formdata = new FormData();          
            // formdata.append('title',post.title);
            // formdata.append('body',post.body);
            // formdata.append('tags',post.tags);           
            // formdata.append('category',post.category);          
            // for(var _img in img_file){           
            //     formdata.append('file', img_file[_img]);
            // }
           
            request.addPost({
               data:{
                   title:post.title,
                   body:post.body,
                   tags:post.tags,
                   category:post.category
               }          
            }).then(res=>{
                // Promise.resolve(res);
                this.$message.success('发布成功！') 
                console.log(res)  ;
                         
            }).catch(err=>{  
                // Promise.reject(err);   
                this.$message.error('发布失败！')           
                console.log(err);               
            })
        }
    }
}
</script>

<style>
.el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
