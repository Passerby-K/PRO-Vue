<template>
  <div class="rec">
      <p class="title">
          周末去哪
      </p>
      <ul>
          <li class="item border-bottom" v-for="item of week" :key="item.id">
              <div class="item-img">
                <img :src="item.imgUrl" alt="">
              </div>
              <div class="item-info"> 
                  <p class="one"> {{item.title}}</p>
                  <p class="two">{{item.desc}}</p>
              </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        week:Array
    }
    // data(){
    //     return{
    //         list:[
    //             {
    //                 id:"1",
    //                 one:"上海迪士尼乐园",
    //                 two:"全球最大的迪士尼城堡",
    //                 img:"http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg"
    //             }, 
    //             {
    //                 id:"2",
    //                 one:"上海野生动物园",
    //                 two:"会跳芭蕾的小海狮们~",
    //                 img:"http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg"
    //             }, 
    //             {
    //                 id:"3",
    //                 one:"上海欢乐谷",
    //                 two:"敢上1200米长的木质过山车吗？",
    //                 img:"http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg"
    //             }, 
    //             {
    //                 id:"4",
    //                 one:"上海欢乐谷",
    //                 two:"敢上1200米长的木质过山车吗？",
    //                 img:"http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg"
    //             }, 
    //             {
    //                 id:"5",
    //                 one:"上海欢乐谷",
    //                 two:"敢上1200米长的木质过山车吗？",
    //                 img:"http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg"
    //             }, 
    //             {
    //                 id:"6",
    //                 one:"上海迪士尼乐园",
    //                 two:"全球最大的迪士尼城堡",
    //                 img:"http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg"
    //             }, 
    //         ]
    //     }
    // }
}

</script>

<style lang="stylus" scoped>
@import "../../../assets/style/mixin.styl";
        .title 
            line-height .8rem
            background-color #eee
            text-indent .2rem
        .item-img 
            overflow hidden
            height 0
            padding-bottom 37.09%

        img 
            width 100%
        .item-info
            padding .1rem 
            .one 
                line-height .54rem
                font-size .32rem
                ellipsis()
            .two
                line-height .4rem
                ellipsis()
                color #cccc
         


</style>