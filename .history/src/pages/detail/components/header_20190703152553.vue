<template>
  <div>
      <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
          <span class="iconfont abs-back">&#xe679;</span>
      </router-link>
      <div class="header-fixed" v-show="!showAbs" :style="opcityStyle">
            景点详情
        <router-link to="/">
                <div class="iconfont head-back">&#xe679;</div>
        </router-link>
      </div>

  </div>
</template>

<script>
export default {
    name:"DetailHeader",
    data(){
        return{
          showAbs:true , 
          opcityStyle:{
              opacity:0
          }
        }
    },
    methods:{
        handScroll () {
            //滚动的高度
            console.log(document.documentElement.scrollTop)
            const top=document.documentElement.scrollTop;
            if(top > 150){
                this.showAbs=false
            }else{
                this.showAbs=true
            }
        }
    },
    //事件监听，监听一个滚动事件（scroll）,事件名为handScroll
    activated(){
        window.addEventListener("scroll",this.handScroll)
    }
}

</script>

<style lang="stylus" scoped>
    @import "../../../assets/style/overall.styl";
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
    .header-fixed
        position fixed
        top 0
        left 0
        right 0
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