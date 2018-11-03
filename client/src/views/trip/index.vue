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
           location:'云南',
           period:'2017.6.21  -  2017.6.29',
           img:require('@/assets/img/me/2.jpg'),
           link:'http://www.mafengwo.cn/i/7399490.html'
       },{
           location:'马来西亚',
           period:'2018.8.10  -  2018.8.19',
           img:require('@/assets/img/me/Malaysias.jpg'),
           link:'http://www.mafengwo.cn/i/10253694.html'
       }]
    }
}
}
</script>

<style lang="scss" scoped>
.trip{
    display: flex;
}
</style>
