<template>
<div>
  <div class="banner" @click="handclick">
      <img class="banner-img" :src="bannerImg" alt="">
      <!-- <img src="@/assets/img/22.jpg" alt=""> -->
        <div class="banner-info">
            <p class="title">{{this.sightName}}</p>
            <p class="number"><span>${{this.gallaryImgs.length}}</span> </p>
        </div>
  </div>
  <fade>
        <gallary :imgs="gallaryImgs" v-show="showGall" @close="handClose"></gallary>
  </fade>
</div>
</template>

<script>
import Gallary from "common/gallary/gallary"
import Fade from "common/fade/fade"

export default {
    name:"Banner",
    props:{
        sightName:String,
        bannerImg:String,
        gallaryImgs:Array
    },
    data () {
        return{
            showGall:false,
            // imgs:["//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"]
           
        }
    },
    methods:{
        handclick(){
            this.showGall=true
        },
        handClose(){
            this.showGall=false

        }
    },
    components:{
        Gallary,
        Fade
    }
}

</script>

<style lang="stylus" scoped>
    .banner
        position relative
        overflow hidden
        width 100%
        height 0
        padding-bottom 50%
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