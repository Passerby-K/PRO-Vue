<template>
  <div>
      <div class="header-abs">
          <span class="iconfont back">&#xe679;</span>
      </div>
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
        width .8rem
        height .8rem
        border-radius .4rem
        background rgba(0,0,0,0.8)
        test
</style>