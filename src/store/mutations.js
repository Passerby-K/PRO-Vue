export default {
    // city是下面组件传送过来的

    changeCity(state,city){
        state.city=city
        try{
            localStorage.city=city
        } catch (e) {}
    }
}