<template>
    <div class="center-block trip">
        <template v-for="item in trips">
            <trip-item :data="item"></trip-item>
        </template>
    </div>
</template>

<script>
import TripItem from './TripItem.vue'

export default {
components:{ TripItem },
data(){
    return{
       trips:[{
           location:'广西',
           period:'2015.7.12-2015.7.20',
           img:require('@/assets/img/me/guangxi.jpg'),
       },{
           location:'香港',
           period:'2017.7.5',
           img:require('@/assets/img/me/hongkong.jpg'),
       },{
           location:'云南',
           period:'2017.6.21  -  2017.6.29',
           img:require('@/assets/img/me/yunnan.jpeg'),
           link:'http://www.mafengwo.cn/i/7399490.html'
       },{
           location:'厦门',
           period:'2017.12.29  -  2017.1.1',
           img:require('@/assets/img/me/xiamen.jpg'),
           link:'http://www.mafengwo.cn/i/8168134.html'
       },{
           location:'湖南长沙',
           period:'2018.4.29  -  2018.5.1',
           img:require('@/assets/img/me/hunan.jpg'),
       },{
           location:'马来西亚',
           period:'2018.8.10  -  2018.8.19',
           img:require('@/assets/img/me/Malaysias.jpg'),
           link:'http://www.mafengwo.cn/i/10253694.html'
       },]
    }
}
}
</script>

<style lang="scss" scoped>
.trip{
    column-count: 4;
    column-gap: 0;
}
</style>
