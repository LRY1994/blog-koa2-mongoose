<template>
    <div class="search-block">
        <div class="input">
            <input v-model="keyword" />
           <span class="button" @click="searchByKey(keyword)">
               <img src="@/assets/img/search-btn.png"/>
            </span>
        </div>
    <div  class="category">
    <h5>分类</h5>
        <div v-for="(t,index) in category" class="tag" :key="index">
                <img src="@/assets/img/pink-flower.png" v-if="index%2"/>
                <img src="@/assets/img/blue-flower.png" v-else/>
                <span class="text" @click="searchByCategory(t)">{{t}}</span>
        </div>
    </div>
        <div class="tags">
            <h5>标签</h5>
            <div v-for="(t,index) in tags" class="tag" :key="index">
                <img src="@/assets/img/pink-flower.png" v-if="index%2"/>
                <img src="@/assets/img/blue-flower.png" v-else/>
                <span class="text" @click="searchByTag(t)">{{t}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            keyword:'',
            tags:['HTML','CSS','JAVASCRIPT','JAVASCRIPT','CSS','CSS','JAVASCRIPT'],
            category:['专题笔记','每月总结']
        }
    },
    methods:{
        searchByKey(key){
            this.$emit('searchByKey',key);
        },
        searchByTag(tag){
            this.$emit('searchByTag',tag);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.search-block{
    padding: $block-padding;
    border-radius:20px 0;
   
    .input{
        background-color:$blue;
        color:#fff;
       border-radius:20px;
       padding: 2px 5px;
       display: flex;
       justify-content: center;
        width: 80%;
        margin: 0 auto;
        margin-bottom: 20px;
        input{
            background-color:$blue;
            border:none;
            height:30px;
            padding:0;
            vertical-align: middle;
            color:#fff;
            font-size:14px;
            width: 80%;
        }
        .button{           
             background-color:$blue;
             padding:0;
             margin:0;
             border:none;
             vertical-align: middle;
             height:100%;
             &:hover{
                 cursor: pointer;
             }
             img{
                 width:30px;
                 height:30px;
                  vertical-align: middle;
             }
        }

    }
    .category{
        .text{
            font-size: 20px!important;
        }
    }
    .tags{
        .tag{
            display: inline-block;    
        }
    }
    .tag{        
            margin-right:10px;
            margin-bottom: 15px;
            color:$blue;
            &:hover{
                cursor: pointer;
            }
            &:nth-child(2n+1){
                color:$pink;
            }
             img{
                width:15px;
                height:15px;
            }
            .text{
                font-size:18px;
            }
        }
}
</style>
