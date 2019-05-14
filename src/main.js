// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入一个解决移动端300毫秒的延迟
import fastclick from 'fastclick'
// 通用样式
import "./assets/style/reset.css"
// 解决移动端1px 像素的问题
import "./assets/style/border.css"

Vue.config.productionTip = false
fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  components: { App:App },
  template: '<App/>'
})
