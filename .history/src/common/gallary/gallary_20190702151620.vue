<template>
  <div class="gallary">
     <div class="warper">
         11
         <!-- <swiper >
            <swiper-slide :options="swiperOptions">
                <img src="http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_350x240_da2993fc.jpg">
            </swiper-slide>
            <swiper-slide  >
                <img src="http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_350x240_da2993fc.jpg">
            </swiper-slide>
            
            
            <div class="swiper-pagination"  slot="pagination"></div>
             
        </swiper>-->
     </div>
  </div>
</template>

<script>
export default {
    name:"Gallary"
    // data(){
    //     return{
    //         swiperOption:{
    //             pagination:".swiper-pagination",
    //             paginationType:"fraction"
    //         }
    //     }
    // }
}

</script>

<style lang="stylus" scoped>
.gallary
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background #000
    z-index 9
        .warper
           color red
              
</style>