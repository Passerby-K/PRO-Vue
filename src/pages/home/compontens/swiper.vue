<template>
    <div class="headd">
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
</template>

<script>
export default {
    name:"HomeSwiper",
    props:{
        lister:Array
    },
    data () {
        return{
            swiperOption:{
                pagination:".swiper-pagination",
                autoplay:3000,
                speed:300,
                effect : 'fade',
                loop:true
            }
           
        }
    }
}

</script>

<style lang="stylus" scoped>
    >>> .swiper-pagination-bullet-active
        background-color white
    .headd
        overflow hidden
        width 100%
        height 0
        padding-bottom 26%
        background-color yellow
        img 
            width 100%
</style>