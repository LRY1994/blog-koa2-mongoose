<template>
<div>
    <el-button type="success" @click="savePost" >保存</el-button>
    <el-input label="标题" placeholder="标题" v-model="title" ></el-input>

     <mavon-editor v-model="body"/>
</div>
    
</template>

<script>
import request from '../api/request.js';
import marked from 'marked';
export default {
    data(){
        return {
            title:'',
            body:''
        }
    },

    methods:{
        savePost(){
            if(this.title==''||this.body==''){
                this.$message.warning('标题，正文不得为空');
                return;
            }
            request.addPost({
                title:this.title,
                body:marked(this.body)//转换成html储存
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

</style>
