<template>
    <div>
        <home-head></home-head>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHead from "./compontens/head"
import HomeSwiper from "./compontens/swiper"
import HomeIcons from "./compontens/icons"

export default {
    name:"Home",
    components:{
        HomeHead,
        HomeSwiper,
        HomeIcons
    }
    
}
</script>
<style>
    
</style>

