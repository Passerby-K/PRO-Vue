<template>
  <div class="icons">
       <swiper :options="swiperOption">
           <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="item"  v-for="item of page" :key="item.id">
                    <div class="item-img">
                        11<img :src="item.imgUrl" alt="">
                    </div>
                        <p>{{item.desc}}</p>
                </div>
            </swiper-slide>
       </swiper>
      
  </div>
</template>

<script>
export default {
    name:"HomeIcons",
    props:{
        list:Array
    },
    data () {
        return{
            // list:[
            //     {
            //         id:"1",
            //         title:"景点",
            //         img:require("../../../assets/img/i-1.png")
            //     },
            //     {
            //         id:"2",
            //         title:"一日游",
            //         img:require("../../../assets/img/i-2.png")
            //     },
            //     {
            //         id:"3",
            //         title:"上海",
            //         img:require("../../../assets/img/i-3.png")
            //     },
            //     {
            //         id:"4",
            //         title:"娱乐",
            //         img:require("../../../assets/img/i-4.png")
            //     },
            //     {
            //         id:"5",
            //         title:"植物园",
            //         img:require("../../../assets/img/i-5.png")
            //     },
            //     {
            //         id:"6",
            //         title:"公园",
            //         img:require("../../../assets/img/i-6.png")
            //     },
            //     {
            //         id:"7",
            //         title:"野马",
            //         img:require("../../../assets/img/i-7.png")
            //     },
            //     {
            //         id:"8",
            //         title:"野生",
            //         img:require("../../../assets/img/i-7.png")
            //     },
            //     {
            //         id:"9",
            //         title:"野生",
            //         img:require("../../../assets/img/i-7.png")
            //     },
            // ],
            swiperOption:{
                autoplay:false
            },
        }
    },
    
    computed:{
        pages(){
            const pages=[]
            this.list.forEach((item,index)=>{
                const page=Math.floor(index / 8)
                if(!pages[page]){
                    pages[page]=[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }

}

</script>

<style lang="stylus" scoped>
@import "../../../assets/style/overall.styl";
@import "../../../assets/style/mixin.styl";
    .icons >>> .swiper-container
        height 0
        padding-bottom 50%
        // overflow hidden
    .icons 
        margin-top .2rem    
    //     width 100%
    //     height 0
    //     padding-bottom 50%
    //     overflow hidden
    //     display flex
    //     flex-wrap wrap
        .item
            float left
            width 25%
            height 0
            padding-bottom 25%
            overflow hidden
            position relative
            .item-img 
                position absolute
                top 0
                left 0
                right 0
                bottom .4rem
                box-sizing border-box
                padding .08rem 
                img 
                    height 100%
                    display block
                    margin 0 auto
            p
                text-align center 
                // margin-top .06rem
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                color $textcolor
                ellipsis()
                
</style>