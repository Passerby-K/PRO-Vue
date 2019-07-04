<template>
  <div>
      <div class="item" v-for="(item,index) of list" :key="index">
          <div class="item-title border-bottom">
              <span class="item-icon" ></span>
              {{item.title}}
          </div>
          <div v-if="item.children" class="item-children">
              <detail-list :list="item.children"></detail-list>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"DetailList",
    props:{
        list:Array
    }
}

</script>

<style lang="stylus" scoped>
    .item-title
        line-height .8rem
        font-size .3rem
        padding .2rem
        .item-icon
            display: inline-block
            position relative
            top .06rem
            left .06rem
            width: .32rem
            height: .32rem
            background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
            margin-right: .1rem
            background-size: .4rem 3rem
    .item-children
        padding 0 .4rem
</style>