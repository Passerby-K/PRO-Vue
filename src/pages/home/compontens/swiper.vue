<template>
    <div class="headd">
        <swiper :options="swiperOption" >
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img :src="item.img" alt="">
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
    data () {
        return{
            swiperOption:{
                pagination:".swiper-pagination",
                loop:true
            },
            swiperList:[
                {
                    id:"01",
                    img:require("../../../assets/img/1.jpg")
                },
                {
                    id:"02",
                    img:require("../../../assets/img/2.jpg")
                },
                {
                    id:"03",
                    img:require("../../../assets/img/3.jpg")
                },
            ]
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