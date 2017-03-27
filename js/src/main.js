// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
import ElementUI from 'element-ui'
import '../theme/index.css'
import vueResource from 'vue-resource'

Vue.use(ElementUI)
Vue.use(vueResource)
Vue.config.productionTip = false

// 注册全局过滤器，将图片代码过滤为src路径
Vue.filter('weatherImgSrc', (code) => {
  return './static/assets/' + code + '.png'
})
Vue.filter('weatherImgSrc', (code) => {
  return './static/assets/' + code + '.png'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
