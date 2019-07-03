<template>
  <div class="banner">
      <img class="banner-img" src="@/assets/img/11.jpg" alt="">
      <!-- <img src="@/assets/img/22.jpg" alt=""> -->
        <div class="banner-info">
            <p class="title">大连圣亚海洋世界（AAA）</p>
            <p class="ico">$39</p>
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
        overflow hidden
        width 100%
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute

</style>