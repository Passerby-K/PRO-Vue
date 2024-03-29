// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'  // 引入一个解决移动端300毫秒的延迟
import "babel-polyfill" //解决手机上的白屏问题
import "@/assets/style/reset.css"   // 通用样式
import "@/assets/style/border.css"  // 解决移动端1px 像素的问题
import "@/assets/style/iconfont/iconfont.css"  //图标字体
import VueAwesomeSwiper from 'vue-awesome-swiper' //swiper
import 'swiper/dist/css/swiper.css'   //swiper.css
import store from "./store"



Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper, /* { default global options } */)  //调用

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  store:store,
  components: { App:App },
  template: '<App/>'
})
