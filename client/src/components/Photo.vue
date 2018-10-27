<template>
    <div class="photo-block">
        <img class="rope" src="@/assets/img/rope.png"/>
        <div class="photo-box1 rotate1">
            <img src="@/assets/img/me/1.jpg"/>
        </div>
        <div class="photo-box2 rotate2">
            <img src="@/assets/img/me/2.jpg"/>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" soped>
.photo-block{
    position: relative;
    .rope{
        width:500px;
        position: absolute;
        top:-45px;
        right:0;
        z-index:2;
    }
    .rotate1{
     animation: rotation-1 4s  ease-in-out infinite alternate;
    }
    @keyframes rotation-1
        {
        0% {
            transform: rotate(-6deg);
        }   
        100% {
            transform: rotate(-16deg);
        }
    }
    .rotate2{
     animation: rotation-2 2s  ease-in-out infinite alternate;
    }
     @keyframes rotation-2
        {
        0% {
            transform: rotate(10deg);
        }
        100% {
            transform: rotate(6deg);
        }
    }
     .photo-box1{
         width:300px;
         height:265px;        
         background-color: #fff;
         position: relative;
         left:150px;
         top:50px;
         transform: rotate(-10deg);
         display: inline-block;
         box-shadow:2px 2px 3px #bcbfc4;
         img{
             text-align: center;
             width:250px;
             padding:10px 25px 20px 25px;            
         }
     }
     .photo-box2{
         width:225px;
         height:215px;        
         background-color: #fff;
         position: relative;
         left:105px;
         top:80px;
         transform: rotate(10deg);
         z-index:1;
        display: inline-block;
        box-shadow:2px 2px 3px #bcbfc4;
         img{
             text-align: center;
             width:170px;
             padding:10px 25px 20px 25px;
             display: inline-block;
             
         }
     }
}
</style>
