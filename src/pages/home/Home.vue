<template>
    <div>
        <home-head></home-head>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </div>
</template>

<script>
import HomeHead from "./compontens/head"
import HomeSwiper from "./compontens/swiper"
import HomeIcons from "./compontens/icons"
import HomeRecommend from "./compontens/recommend"

export default {
    name:"Home",
    components:{
        HomeHead,
        HomeSwiper,
        HomeIcons,
        HomeRecommend
    }
    
}
</script>
<style>
    
</style>

