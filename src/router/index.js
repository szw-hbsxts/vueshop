import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/reset.css'
import '../assets/css/header.css'
import '../assets/css/footer.css'


import Home from '../views/home.vue'
import Mphone from '../views/mPhone.vue'
import Shop from '../views/shop.vue'
import Pageone from '../views/page_one.vue'
import Pagetwo from '../views/page_two.vue'
import Pagethree from '../views/page_three.vue'
import Pagefour from '../views/page_four.vue'
import Pagefive from '../views/page_five.vue'
import Item from '../views/item.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/mPhone',
      name: 'mPhone',
      component: Mphone
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/Pageone',
      name: 'page_one',
      component: Pageone
    },
    {
      path: '/Pagetwo',
      name: 'page_two',
      component: Pagetwo
    },
    {
      path: '/Pagethree',
      name: 'page_three',
      component: Pagethree
    },
    {
      path: '/Pagefour',
      name: 'page_four',
      component: Pagefour
    },
    {
      path: '/Pagefive',
      name: 'page_five',
      component: Pagefive
    },
    {
      path: '/Item',
      name: 'item',
      component: Item
    }
  ]
})
