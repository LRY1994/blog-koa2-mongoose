<template>
    <div class=" center-block">
        <template v-for="item in books">
            <book :data="item" class="book"></book>
        </template>
    </div>
</template>

<script>
import Book from './Book';
export default {
    components:{Book},
    data(){
        return{
            books:[{
                author:'列宁',
                title:'人类简史',
                period:'2018-10-9~2018-11-1',
                cover:require('@/assets/img/books/the_shortest_history_of_Europe.png')
            },{
                author:'列宁',
                title:'人类简史',
                period:'2018-10-9~2018-11-1',
                cover:require('@/assets/img/books/the_shortest_history_of_Europe.png')
            },{
                author:'列宁',
                title:'人类简史',
                period:'2018-10-9~2018-11-1',
                cover:require('@/assets/img/books/the_shortest_history_of_Europe.png')
            },{
                author:'列宁',
                title:'人类简史',
                period:'2018-10-9~2018-11-1',
                cover:require('@/assets/img/books/the_shortest_history_of_Europe.png')
            }]
        }  
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/variable.scss';
.book{
   display: inline-block;
    margin:20px;
    margin-left:0;
}
</style>
