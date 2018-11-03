<template>
    <div class="article-block">
        <template v-for="(item,index) in list">
            <article-item :data="item" :key="index"></article-item>
        </template>
        <pagination ></pagination>
    </div>
</template>

<script>
import ArticleItem from './ArticleItem'
import Pagination from '@/components/Pagination';
import request from '@/api/request.js';
export default {
    components:{ ArticleItem ,Pagination},
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.loadData();
    },
    methods:{
        loadData(params){
            if(!params) params ={};
            request.listPost({params}).then(res=>{
                this.list = res.data;
            }).catch(err=>{
                console.log(err)
            })
        },
        searchByKeyword(key){
            this.loadData({keyword:key});          
        },
        searchByTag(tag){
            this.loadData({tag:tag});          
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.article-block{
    padding:$block-padding;
    border-radius: 0 20px;
}
</style>
