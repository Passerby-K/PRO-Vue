import Vue from "vue"
import Vuex from "vuex"
import state from "./state"
import mutations from "./mutations"

Vue.use(Vuex)



// 创建一个传输仓库

export default new Vuex.Store({
    state:state,
    // actions:{
    //     // 接搜下面组件传过来的数据。
    //     changeCity(ctx,city){
    //         // console.log(city)
    //         // 把接受的数据传给city,发送出去
    //         ctx.commit("changeCity",city)
            
    //     }
    // },
    mutations:mutations
})