<template>
    <div class="search-block">
        <div class="input">
            <input v-model="keyword" />
           <span class="button" @click="search(keyword)"><img src="@/assets/img/search-btn.png"/></span>
        </div>
        <div class="tags">
            <div v-for="(t,index) in tags" class="tag">
                <img src="@/assets/img/pink-flower.png" v-if="index%2"/>
                <img src="@/assets/img/blue-flower.png" v-else/>
                <span class="text" @click="search(t)">{{t}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            keyword:'搜索',
            tags:['HTML','CSS','JAVASCRIPT','JAVASCRIPT','CSS','CSS','JAVASCRIPT']
        }
    },
    methods:{
        search(key){
            console.log(key)
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
    .tags{
        margin-top:20px;
    
        .tag{
            display: inline-block;
            margin-right:10px;
            margin-bottom: 15px;
            color:$pink;
            &:hover{
                cursor: pointer;
            }
            &:nth-child(2n+1){
                color:$blue
            }
             img{
                width:15px;
                height:15px;
            }
            .text{
                font-size:16px;
            }
        }
    }
}
</style>
