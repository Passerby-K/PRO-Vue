<template>
  <div>
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <div class="content">
        <detail-list :list="list"></detail-list>
      </div>
  </div>
</template>

<script>
import DetailBanner from "./components/banner"
import DetailHeader from "./components/header"
import DetailList from "./components/list"
export default {
    name:"Detail",
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return{
            list:[
                {
                    title:"成人票",
                    children:[
                        {
                            title:"成人三联票",
                            children:[
                                {title:"三级-联票-销售"}
                            ]
                        
                        },
                        {title:"成人四联票"}
                    ]
                
                },
                {
                    title:"学生票",
                     children:[
                        {title:"学生三联票"},
                        {title:"学生学生四联票"}
                    ]
                
                },
                {
                    title:"儿童票",
                    children:[
                        {title:"儿童三联票"},
                        {title:"儿童四联票"}
                    ]
                },
                {
                    title:"特惠票",
                    
                },
            ]
        }
    }
}

</script>

<style lang="stylus" scoped>
    .content
        width 100%
        height 50rem
        // background-color red
</style>