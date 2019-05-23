<template>
  <div class="list" ref="wraper">
    <div>
      <div class="area">
          <div class="title border">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                   <div class="button">上海</div>
              </div>
              
          </div>
      </div>
      <div class="area">
          <div class="title border">热门城市</div>
          <div class="button-list">
              <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
                   <div class="button">{{item.name}}</div>
              </div>
          </div>
      </div>
      <!-- A -->
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
          <div class="title border">{{key}}</div>
          <div class="item-list">
              <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
              
          </div>
      </div>
      
    </div>
  </div>
</template>

<script> 
import Bscroll from "better-scroll"

export default {
    name:"CityList",
    props:{
        cities:Object,
        hotCities:Array,
        letter:String
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.wraper)
    },
    // 事件监听，
    watch:{
        letter () {
            if(this.letter){
                const element=this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
                console.log(element);
                
                }
                // console.log(this.letter+"--le");
            
        }
    }
}

</script>

<style lang="stylus" scoped>
    .border 
        &:after
            border-color #ccc
        &:before
            border-color #ccc
    .border-bottom 
        &:before
            border-color #ccc
    .list
        overflow hidden
        position absolute
        top 1.68rem
        left 0
        rigth 0
        bottom 0
        width 100%
        .title
            line-height .54rem
            background-color #eee
            padding-left .2rem
            font-size .26rem
            color #666
        .button-list   
            padding .1rem .6rem .1rem .1rem
            overflow hidden
            .button-wrapper
                float left 
                width 29%
                padding .1rem
                .button
                    padding  .1rem 0
                    amrgin .1rem
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>