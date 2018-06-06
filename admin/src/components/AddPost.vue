<template>
<div>
    <write-post ref="writePost"></write-post>
    <el-button type="success" @click="savePost" style="width:100%;margin-top:20px">发表</el-button>
</div>
    
</template>

<script>
import request from '../api/request.js';
import WritePost from './WritePost'
export default {
    data(){
        return {
            inputTagVisible:false,
            inputTag:''
        }
    },
   components:{ WritePost },
    methods:{      
        savePost(){
            const post = this.$refs.writePost.postNew;
            if(post.title==''||post.body==''){
                this.$message.warning('标题，正文不得为空');
                return;
            }
            request.addPost({
                title:post.title,
                body:post.body,
                tags:post.tags,
                category:post.category
            }).then(res=>{
                console.log(res)  ;
                this.$message.success('发布成功！')            
            }).catch(err=>{                
                console.log(err);
                this.$message.error('发布失败！')
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
