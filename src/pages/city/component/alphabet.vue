<template>
      <ul class="list">
          <li class="item" v-for="item of letters" :key="item" 
          @touchstart.prevent="handtouch" 
          @touchmove="handmove" 
          @touchend="handend" 
          @click="handclick"
          :ref="item"
          >
          {{item}}</li>
          
      </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    computed:{
        letters(){
            const letters=[]
            for(let i in this.cities){
                letters.push(i)
            }
            return letters
        }
    },
    data(){
        return{
            touchstatus:false,
            startY:0,
            timer:null
        }
    },
    updated(){
        this.startY=this.$refs["A"][0].offsetTop
    },
    methods:{
        handclick (e){
            this.$emit("change",e.target.innerText)

        },
        handtouch(){
            this.touchstatus=true
        },
        handmove(e){
            if(this.touchstatus){
                
                // const startY=this.$refs["A"][0].offsetTop
                if(this.timer){
                    clearTimeout(this.tiemr)
                }
                this.timer=setTimeout(()=>{

                    const touchY=e.touches[0].clientY - 79
                    const index=Math.floor((touchY-this.startY)/20)
                    console.log(index)
                    if(index>=0 && index<this.letters.length){
                        this.$emit("change",this.letters[index])
                    }
                },16)
            }
        },
        handend(){
            this.touchstatus=false
        }
    }
}

</script>
 
<style lang="stylus" scoped>
    .list
        display flex
        flex-direction: column
        justify-content center
        position absolute
        top 1.58rem
        right 0
        bottom 0
        width .4rem
        .item
            text-align center
            line-height .40rem
            color blue
            font-size .3rem
            // padding .02rem 0
</style>