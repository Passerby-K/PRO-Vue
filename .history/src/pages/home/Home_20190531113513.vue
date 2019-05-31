<template>
    <div>
        <home-head ></home-head>
        <home-swiper :lister="swiperLister"></home-swiper>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :reco="reco"></home-recommend>
        <home-week :week="week"></home-week>
    </div>
</template>

<script>
import HomeHead from "./compontens/head"
import HomeSwiper from "./compontens/swiper"
import HomeIcons from "./compontens/icons"
import HomeRecommend from "./compontens/recommend"
import HomeWeek from "./compontens/week"
import axios from "axios"
import {mapState} from "vuex"

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
            lastCity:'',
            swiperLister:[],
            iconList:[],
            icon:[],
            reco:[],
            week:[]
        }
    },
    computed:{
        ...mapState(["city"])
    },
    methods:{
        gethomeinfo(){
            axios.get("/api/index.json?city="+this.city)
                .then(this.gethomesucc)
        },
        gethomesucc (res){
            res=res.data
            
            if(res.ret && res.data){
                this.swiperLister=res.data.swiperList
                this.iconList=res.data.iconList
                this.reco=res.data.recommendList
                this.week=res.data.weekendList

            }
            console.log(res);
            
        }

    },
    mounted(){
        this.gethomeinfo()
        console.log("mounetd");
        this.lastCity=this.city
        
        
    },
    activated(){
        console.log("activeted");
        if(this.lastCity!== this.city){
            this.gethomeinfo()
        }

        
    }
    
}
</script>
<style>
    
</style>

