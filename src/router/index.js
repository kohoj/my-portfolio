import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/components/carousel#hero', component: () => import('../App.vue') },
  {
    path: '/',
    redirect: () => {
      return window.innerWidth >= 500 ? { path: '/components/carousel' } : { path: '/welcome' }
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})