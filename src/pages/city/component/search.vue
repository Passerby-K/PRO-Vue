<template>
<div>

  <div class="search">
      <input type="text" v-model="keyword" class="search-inp" placeholder="请输入城市名">
  </div>
  <div class="seach-content" ref="search" v-show="keyword">
      <ul>
          <li class="item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
          <li class="item border-bottom" v-show="hasList" >没有相关的数据</li>
      </ul>
  </div>
</div>
    
</template>

<script>
import Bscroll from "better-scroll"
export default {
    name:"CitySearch",
    props:{
        cities:Object
    },
    data(){
        return{
            keyword:"",
            list:[],
            timer:null
        }
    },
    computed:{
        hasList(){
            return !this.list.length
        }
    },
    watch:{
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return
            }
            this.timer=setTimeout(() => {
                const result=[]
                for (let i in this.cities){
                    this.cities[i].forEach((value)=>{
                        if(value.spell.indexOf(this.keyword)>-1  || value.name.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    })
                }
                this.list=result
            }, 100);
        }
    },
    mounted(){
        this.scroll=new Bscroll(this.$refs.search)
    }
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
    .seach-content
        z-index 1
        overflow hidden
        position absolute
        top 1.60rem
        bottom 0
        left 0
        right 0
        background-color #eeeeee
        .item
            line-height .62rem
            padding-left .2rem
            color #666
            background-color #fff

</style>