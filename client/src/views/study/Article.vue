<template>
<div class="article center-block">
    <h2>{{post.title}}</h2>
    <div class="time-block">
        <span class="time"> 创建时间:{{post.meta.createAt|dateformat}}</span>
        <span class="time">更新时间:{{post.meta.updateAt|dateformat}}</span>
    </div>
    <template v-for="(t,index) in post.tags">
        <span class="tag" :key="index">{{t}}</span>
    </template>
    <div v-html="postHtml"  v-highlight ></div>
</div>
</template>

<script>
import marked from 'marked';
import request from '@/api/request.js';
export default {
    data(){
        return {
            post:{},
            postHtml:''
        }
    },
    created(){
        this.loadData();
    },
    methods:{
        loadData(){
            request.getPost({
                params:{
                    postId:this.$route.params.id
                }
            }).then(res=>{
                this.post = res.data;              
                this.postHtml = marked(this.post.body)                   
            }).catch(err=>{
                console.log(err)
            })
        },
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.article{
    background-color: #fff;
    padding:50px;
    h2{
        text-align: center;
    }
    .time-block{
        text-align: center;   
        .time{
            color:#ddd;
            margin-right: 20px;
        }
    }
    .tag{
            background-color: $blue;
            color: #fff;
            border-radius: 5px;
            padding: 2px 15px;
            margin: 10px;
            font-size: 10px;
            &:hover{
                cursor: pointer;
            }
        }
}
</style>
