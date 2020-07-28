import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CtoF from '../views/CtoF.vue'
import Count from '../views/Count.vue'
import TodoList from '../views/TodoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/CtoF',
    name: 'CtoF',
    component: CtoF
  },
  {
    path: '/Count',
    name: 'Count',
    component: Count
  },
  {
    path: '/TodoList',
    name: 'TodoList',
    component: TodoList
  },
  // {
  //   path: '/*',
  //   redirect: '/Home'
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
