import Vue from 'vue'
import VueRouter from 'vue-router'

import Account from '@/views/Account.vue'
import Keyword from '@/views/Keyword.vue'
import ObserveList from '@/views/ObserveList.vue'
import ViewRecords from '@/views/ViewRecords.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    redirect: 'Account'
  },
  {
    path: '/',
    name: 'Account',
    component: Account
  },
  {
    path: '/k',
    name: 'Keyword',
    component: Keyword
  },
  {
    path: '/o',
    name: 'ObserveList',
    component: ObserveList 
  },
  {
    path: '/o/:id',
    name: 'ViewRecords',
    component: ViewRecords 
  }
]

const router = new VueRouter({
  routes
})

export default router
