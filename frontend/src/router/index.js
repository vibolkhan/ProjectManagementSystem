import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: {
      login: true
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../views/LoginView.vue'),
    meta: {
      logout: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
