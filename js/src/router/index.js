import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/components/home/home'], resolve)
    },
    {
      path: '/setting',
      name: 'setting',
      component: resolve => require(['@/components/setting/setting'], resolve)
    },
    {
      path: '/addCity',
      name: 'addCity',
      component: resolve => require(['@/components/setting/addCity'], resolve)
    },
    {
      path: '/editCity',
      name: 'editCity',
      component: resolve => require(['@/components/setting/editCity'], resolve)
    }
  ]
})
