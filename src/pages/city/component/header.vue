<template>
  <div class="header">
      城市选择
      <router-link to="/">
            <div class="iconfont head-back">&#xe679;</div>
      </router-link>
  </div>
</template>

<script>
export default {
    name:"Header"
}

</script>

<style lang="stylus" scoped>
    @import "../../../assets/style/overall.styl";
    .header
        overflow hidden
        height .86rem
        line-height .86rem
        text-align center
        color #fff
        font-size .32rem
        background $bgcolor
        .head-back
            position absolute
            top 0
            left 0
            color white
            width .64rem
            text-align center
            fint-size  .6rem
</style>