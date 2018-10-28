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
import Pagination from '@/components/Pagination'
export default {
    components:{ ArticleItem ,Pagination},
    data(){
        return{
            list:[
                {
                    title:'11月读书笔记',
                    tags:['css','css','js'],
                    desc:'   在这个教程中，我们将使用 ionic 创建原生应用，并用 ECharts 创建饼图和水球图。ionic 项目开发语言是  副本'
                },
                 {
                    title:'11月读书笔记',
                    tags:['css','css','js'],
                                        desc:'   在这个教程中，我们将使用 ionic 创建原生应用，并用 ECharts 创建饼图和水球图。ionic 项目开发语言是  副本'
                }, {
                    title:'11月读书笔记',
                    tags:['css','css','js'],
                                        desc:'   在这个教程中，我们将使用 ionic 创建原生应用，并用 ECharts 创建饼图和水球图。ionic 项目开发语言是  副本'
                },
                {
                    title:'11月读书笔记',
                    tags:['css','css','js'],
                    desc:'   在这个教程中，我们将使用 ionic 创建原生应用，并用 ECharts 创建饼图和水球图。ionic 项目开发语言是  副本'
                },
                 {
                    title:'11月读书笔记',
                    tags:['css','css','js'],
                                        desc:'   在这个教程中，我们将使用 ionic 创建原生应用，并用 ECharts 创建饼图和水球图。ionic 项目开发语言是  副本'
                },
            ]
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
