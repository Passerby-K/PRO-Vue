<template>
    <div>
        <home-head></home-head>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
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

export default {
    name:"Home",
    components:{
        HomeHead,
        HomeSwiper,
        HomeIcons,
        HomeRecommend,
        HomeWeek
    }
    
}
</script>
<style>
    
</style>

