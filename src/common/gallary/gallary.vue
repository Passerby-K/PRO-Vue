<template>
  <div class="gallary" @click="handGall">
      <div class="warpper">
          <swiper :options="swiperOption"  >
            
            <swiper-slide   v-for="(item,index) in imgs" :key="index">
                <img :src="item" alt="">
            </swiper-slide>
           
            
           
            <div class="swiper-pagination"  slot="pagination"></div>
            
        </swiper>
      </div>
       
  </div>
</template>

<script>
export default {
    name:"Gallary",
    props:{
        imgs:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            swiperOption:{
                pagination:".swiper-pagination",
                paginationType:"fraction",
                autoplay:1000,
                observeParents:true,
                observer:true

            }
        }
    },
    methods:{
        handGall () {
            this.$emit('close')
        }
    }
    
}

</script>

<style lang="stylus" scoped>
.gallary >>> .swiper-container
    overflow inherit
.gallary
    display flex
    flex-direction column
    justify-content center
    position fixed
    left 0
    top 0
    right 0
    bottom 0
    background #000
    z-index 9
    .warpper
        width 100%
        img
            width 100%
        .swiper-pagination
            color #fff
            bottom -1rem

        
    
        
              
</style>