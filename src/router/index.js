import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Goods from '@/components/Goods'
import Seller from '@/components/Seller'
import Ratings from '@/components/Ratings'

// https://router.vuejs.org/zh-cn/essentials/history-mode.html
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/goods'
    },
    {
      path: '/goods',
      component: Goods
    },
    {
      path: '/ratings',
      component: Seller
    },
    {
      path: '/seller',
      component: Ratings
    }
  ]
})
