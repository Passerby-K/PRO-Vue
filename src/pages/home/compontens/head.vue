<template>
    <div class="head">
        <div class="head-left">
            <span class="iconfont back">&#xe679;</span>
        </div>
        <div class="head-input">
            <span class="iconfont">&#xe6ac;</span>
            <input type="text" placeholder="请输入城市景点/游玩主题">
        </div>
        <router-link to="/city">
            <div class="head-right">
                <p>{{this.$store.state.city}}<span class="iconfont back">&#xe605;</span></p> 
                
            </div>
        </router-link>

    </div>
</template>

<script>
export default {
    name:"Head",
}
</script>
<style lang="stylus" scoped>
// @import "../../../assets/style/overall.styl";
@import "~@/assets/style/overall.styl";
    .head
        display flex
        height:.86rem
        line-height 0.86rem
        background-color: $bgcolor
        .head-left
            width: 0.64rem
            color white
            float left 
            .back
                display block
                text-align center
                font-size .4rem
        .head-input
            flex:1
            box-sizing border-box
            height .64rem
            line-height .64rem
            background-color #fff
            border-radius .1rem
            margin-left .2rem
            margin-top .12rem
            position relative
            span
                position absolute
                top .01rem
                left .08rem

            input
                width 100%
                height 100%
                box-sizing border-box
                padding-left .5rem
                border-radius .1rem

        .head-right
            min-width 1.04rem
            padding 0 .1rem  
            color white
            float right
            text-align center
            font-size .34rem
                

            
</style>

