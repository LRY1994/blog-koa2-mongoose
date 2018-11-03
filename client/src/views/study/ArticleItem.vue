<template>
    <div class="article-item-block">
        <div class="time-block">
            <img src="@/assets/img/star.png"/>
            <span>{{updateY}}<br/>{{updateMaD}}</span>
            <!-- <span>{{data.meta.createdAt}}</span> -->

        </div>
        <div class="text">
            <div>
                <h3>
                    <router-link :to="`article/${data._id}`">{{data.title}}</router-link>
                </h3>
                <template v-for="(t,index) in data.tags">
                    <span class="tag" :key="index">{{t}}</span>
                </template>
            </div>
            <span class="time">创建于{{data.meta.createdAt|dateformat}}</span>
            <span class="time">更新于{{data.meta.updateAt|dateformat}}</span>

           
            <p>{{data.body}}</p>
        </div>
    </div>
</template>

<script>

export default {
    props:['data'],
   data(){
       return{
            updateY:'',
            updateMaD:''
       }  
   },
    created(){
        const time = this.$options.filters.dateformat(this.data.meta.updateAt,'YYYY-MM-DD').split('-');
        this.updateY = time[0];
        this.updateMaD = `${time[1]}-${time[2]}`;
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.article-item-block{
    position: relative;
    border-bottom:5px dashed  $pink;
    padding-bottom:20px;
    .time-block{
        position: absolute;
        img{
            position: relative;
            top: -20px;
        }
        span{
            position: absolute;
            left:40px;
            top:23px;
        }
    }
    .text{
        margin-left:150px;
        display: inline-block;
        h3{
            color:$pink;
            display: inline-block;
            a{
                color:inherit;
                text-decoration: none;
            }
        }
        .time{
            color:#d3d3d3;
            font-size: 12px;
            margin-right:10px;
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
        p{
            height:60px;
            overflow: hidden;
        }
    }
}
</style>
