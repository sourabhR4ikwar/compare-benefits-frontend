import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Company from '../views/Company.vue'
import User from '@/views/Register/User';
import CompanyUpdate from '@/views/CompanyUpdate';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/company/:id/update',
    name: 'UpdateCompany',
    component: CompanyUpdate
  },
  {
    path: '/company/:id',
    name: 'Company',
    component: Company
  },
  {
    path: '/competitors/:id',
    name: 'Competitors',
    component: () => import('@/views/Competitors.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register/Register'),
    children: [
      {
        path: 'user',
        component: User
      },
      {
        path: 'company/:id',
        component: () => import('@/views/Register/Company')
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/PageNotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
