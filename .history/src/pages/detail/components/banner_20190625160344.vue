<template>
  <div class="banner">
      <img class="banner-img" src="@/assets/img/11.jpg" alt="">
      <!-- <img src="@/assets/img/22.jpg" alt=""> -->
        <div class="banner-info">
            <p class="title">大连圣亚海洋世界（AAA）</p>
            <p class="number"><span>$39</span> </p>
        </div>
  </div>
</template>

<script>
export default {
    name:"Banner"
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
            justify-content space-between
            .title
                flex 1
                font-size .32rem
                padding .2rem
                line-height .4rem
            .number
                padding 0 .4rem
                line-height .32rem
                height .32rem
                border-radius .2rem
                font-size .24rem
                background rgba(0,0,0,0.5)



</style>