import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/tabbar/Home'
import Search from '@/components/tabbar/Search'
import Concat from '@/components/tabbar/Concat'
import Shopcar from '@/components/tabbar/Shopcar'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/chat', component: Concat},
    {path: '/search', component: Search},
    {path: '/shopcar', component: Shopcar},
  ],
  linkActiveClass: 'mui-active'
})
