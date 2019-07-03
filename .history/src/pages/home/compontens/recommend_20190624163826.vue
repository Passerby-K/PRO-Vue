<template>
  <div class="rec">
      <p class="title">
          本周推荐
      </p>
      <ul>
          <!-- <router-link to="index.html"> -->
            <router-link class="item border-bottom" tag="li" v-for="item of reco" :key="item.id">
                    <img :src="item.imgUrl" alt="">
                <div class="item-info"> 
                    <p class="one"> {{item.title}}</p>
                    <p class="two">{{item.desc}}</p>
                    <button>查看详情</button>
                </div>
            </router-link>
          <!-- </router-link> -->
      </ul>
  </div>
</template>

<script>
export default {
    name:"HomeRecommend",
    props:{
        reco:Array
    },
    data(){
        return{
            list:[
                {
                    id:"1",
                    one:"上海迪士尼乐园",
                    two:"全球最大的迪士尼城堡",
                    img:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg"
                }, 
                {
                    id:"2",
                    one:"上海野生动物园",
                    two:"会跳芭蕾的小海狮们~",
                    img:"http://img1.qunarzz.com/sight/p0/1904/d5/d579b03a110d75a8a3.img.jpg_200x200_740bd4c0.jpg"
                }, 
                {
                    id:"3",
                    one:"上海欢乐谷",
                    two:"敢上1200米长的木质过山车吗？",
                    img:"http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_200x200_9a7794fc.jpg"
                }, 
                {
                    id:"4",
                    one:"上海欢乐谷",
                    two:"敢上1200米长的木质过山车吗？",
                    img:"http://img1.qunarzz.com/sight/p0/1904/6e/6edffb73a665bc70a3.img.jpg_200x200_0e892907.jpg"
                }, 
                {
                    id:"5",
                    one:"上海欢乐谷",
                    two:"敢上1200米长的木质过山车吗？",
                    img:"http://img1.qunarzz.com/sight/p0/1811/e4/e4b9b471d2afc473a3.img.jpg_200x200_9a7794fc.jpg"
                }, 
                {
                    id:"6",
                    one:"上海迪士尼乐园",
                    two:"全球最大的迪士尼城堡",
                    img:"http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg"
                }, 
            ]
        }
    }
}

</script>

<style lang="stylus" scoped>
@import "../../../assets/style/mixin.styl";
.rec
    margin-top .2rem
    .title
        line-height .8rem
        background-color #eee
        text-indent .2rem
    .item
        display flex
        width 100%
        height 2rem
        overflow hidden
        img 
            height 2rem
            width 2rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem 
            min-width 0
            .one 
                line-height .54rem
                font-size .32rem
                ellipsis()
            .two
                line-height .4rem
                ellipsis()
                color #cccc
            button
                margin-top  .3rem
                line-height .44rem
                background-color #ff9300
                padding 0 .1rem
                border-radius .06rem
                color white


</style>