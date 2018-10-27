<template>
    <div>
        <motto class="motto" :data="motto"/>
        <photo class="photo"/>
    </div>
</template>

<script>
import Motto from '@/components/Motto.vue'
import Photo from '@/components/Photo.vue'

export default {
components:{Motto,Photo},
data(){
    return{
        motto:'想在暖风醉人的季节里，去赴一场花宴。你若同行，愿与你一路畅聊这风花雪月。'
    }
}
}
</script>

<style lang="scss" scoped>
.motto{
    float: left;
}
.photo{
    margin-left:400px;
}
</style>
