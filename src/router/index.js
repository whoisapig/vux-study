import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Index from '@/pages/index/Index'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    component: Home,
    children: [{
      path: '', component: Index, props: { name: '个人中心' }
    }]
  }]
})
