<template>
    <div>
        <home-head :city="city"></home-head>
        <home-swiper :lister="swiperLister"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend></home-recommend>
        <home-week></home-week>
    </div>
</template>

<script>
import HomeHead from "./compontens/head"
import HomeSwiper from "./compontens/swiper"
import HomeIcons from "./compontens/icons"
import HomeRecommend from "./compontens/recommend"
import HomeWeek from "./compontens/week"

import axios from "axios"

export default {
    name:"Home",
    components:{
        HomeHead,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeek
    },
    data () {
        return{
            city:'',
            swiperLister:[],
            iconList:[]
        }
    },
    methods:{
        gethomeinfo(){
            axios.get("/api/index.json")
                .then(this.gethomesucc)
        },
        gethomesucc (res){
            res=res.data
            if(res.ret && res.data){
                this.city=res.data.city
                this.swiperLister=res.data.swiperList
                this.iconList=res.data.iconList

            }
            console.log(res);
            
        }

    },
    mounted(){
        this.gethomeinfo()
    }
    
}
</script>
<style>
    
</style>

