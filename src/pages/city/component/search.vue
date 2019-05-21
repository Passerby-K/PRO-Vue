<template>
  <div class="search">
      <input type="text" class="search-inp" placeholder="请输入城市名">
  </div>
</template>

<script>
export default {
    name:"CitySearch"
}

</script>

<style lang="stylus" scoped>
@import "~@/assets/style/overall.styl";
    .search
        height .72rem
        padding .1rem
        background-color $bgcolor
        .search-inp
            height .62rem
            width 100%
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666
</style>