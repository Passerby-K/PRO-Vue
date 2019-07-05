<template>
  <div>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-header ></detail-header>
      <div class="content">
        <detail-list :list="list"></detail-list>
      </div>
  </div>
</template>

<script>
import DetailBanner from "./components/banner"
import DetailHeader from "./components/header"
import DetailList from "./components/list"
import axios from "axios"
export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            sightName:'',
            bannerImg:"",
            gallaryImgs:[],
            list:[]
        }
    },
    methods:{
        getDetailInfo(){
            // 第一种方法
            // axios.get("/api/detail.json?id="+this.$route.params.id)
            // 第二种
            axios.get("/api/detail.json",{
                params:{
                    id:this.$route.params.id
                }
            }).then(this.handGetDataSucc)
        },
        handGetDataSucc(res){
            res=res.data
            console.log(res)
            if(res.ret&&res.data){
                const data=res.data
                console.log(data)
                this.sightName=data.sightName
                this.bannerImg=data.bannerImg
                console.log(this.bannerImg)
                this.gallaryImgs=data.gallaryImgs
                this.list=data.categoryList

            }
        }
    },
    mounted(){
        this.getDetailInfo()
    }
}

</script>

<style lang="stylus" scoped>
    .content
        width 100%
        height 50rem
        // background-color red
</style>