<template>
<div>
  <div class="banner">
      <img class="banner-img" src="@/assets/img/11.jpg" alt="">
      <!-- <img src="@/assets/img/22.jpg" alt=""> -->
        <div class="banner-info">
            <p class="title">大连圣亚海洋世界（AAA）</p>
            <p class="number"><span>$39</span> </p>
        </div>
  </div>
  <gallary :imags="images"></gallary>
</div>
</template>

<script>
import Gallary from "common/gallary/gallary"
export default {
    name:"Banner",
    data(){
        retuen:{
             images ['//img1.qunarzz.com/sight/p0/1709/87/87e3acc2ee041669a3.img.jpg_600x330_bce4b0f5.jpg','//img1.qunarzz.com/sight/p0/1506/16/f05ab7bbcbdf7b7fdee652843ebba2db.water.jpg_600x330_c9fdfa5d.jpg']
        }
    },
    components:{
        Gallary
    }
}

</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        width 100%
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute
            color #fff
            left 0
            right 0
            bottom 0
            line-height .6rem
            display flex
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .title
                flex 1
                font-size .32rem
                padding .2rem
                // line-height .4rem
            .number
                padding 0 .4rem
                line-height .32rem
                margin-top .34rem
                height .32rem
                border-radius .2rem
                font-size .24rem
                background rgba(0,0,0,0.5)



</style>