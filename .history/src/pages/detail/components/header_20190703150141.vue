<template>
  <div>
      <router-link to="/" tag="div" class="header-abs">
          <span class="iconfont abs-back">&#xe679;</span>
      </router-link>
      <div class="header-fixed"></div>

  </div>
</template>

<script>
export default {
    name:"DetailHeader"
}

</script>

<style lang="stylus" scoped>
    .header-abs
        position absolute
        top .2rem
        left .2rem 
        width .6rem
        height .6rem
        border-radius .4rem
        background rgba(0,0,0,0.8)
        text-align center
        line-height .6rem

        .abs-back   
            color white
            font-size .4rem
</style>