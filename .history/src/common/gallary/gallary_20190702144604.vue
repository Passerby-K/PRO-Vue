<template>
  <div class="gallary">
     <div class="warper">
         <swiper :options="swiperOption"  v-if="lister.length">
            <!-- slides -->
            <swiper-slide v-for="item of lister" :key="item.id" >
                <img :src="item.imgUrl" alt="">
            </swiper-slide>
            
            
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- 左右按钮 -->
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
            <!-- 滚动条 -->
            <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
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
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background #000
    z-index 9
    display flex
    flex-direction column
    justify-content center
        .wraper
        width 100%
        height 0
        overflow hidden
        padding-botttom 100%
        background-color red;

</style>