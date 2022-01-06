import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import UserSettings from '@/components/UserSettings'
import WishList from '@/components/WishList'
import ShoppingCart from '@/components/ShoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user-settings',
      name: 'UserSettings',
      component: UserSettings
    },
    {
      path: '/wish-list',
      name: 'WishList',
      component: WishList
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
