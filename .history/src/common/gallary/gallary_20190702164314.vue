<template>
  <div class="gallary">
      <div class="warpper">
          <swiper :options="swiperOption"  >
            <!-- slides -->
            <swiper-slide  >
                <img src="//img1.qunarzz.com/sight/p0/1709/87/87e3acc2ee041669a3.img.jpg_600x330_bce4b0f5.jpg" alt="">
            </swiper-slide>
            <!-- slides -->
            <swiper-slide  >
                <img src="//img1.qunarzz.com/sight/p0/1506/16/f05ab7bbcbdf7b7fdee652843ebba2db.water.jpg_600x330_c9fdfa5d.jpg" alt="">
            </swiper-slide>
            
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name:"Gallary",
    data(){
        return{
            swiperOption:{
                pagination:".swiper-pagination",
                paginationType:"fraction",
                autoplay:1000,
            }
        }
    }
    
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
    .warpper
        background-color #fff
        width 100%
        img
            width 100%
        .swiper-pagination
            color #fff
            bottom -1rem

        
    
        
              
</style>