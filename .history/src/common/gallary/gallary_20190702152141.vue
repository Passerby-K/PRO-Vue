<template>
  <div class="gallary">
      <div class="warpper">
          <swiper :options="swiperOption"  >
            <!-- slides -->
            <swiper-slide  >
                <img src="http://touch.piao.qunar.com/touch/detail_3022.html?cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E4%25B8%258A%25E6%25B5%25B7%25E5%25BF%2585%25E6%2589%2593%25E5%258D%25A1%26dist_city%3D%25E4%25B8%258A%25E6%25B5%25B7" alt="">
            </swiper-slide>
            
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            
        </swiper>
      </div>
  </div>
</template>

<script>
export default {
    name:"Gallary"
    
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
        
              
</style>