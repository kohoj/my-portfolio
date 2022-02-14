import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/components/carousel#hero' },
  { path: '/components/carousel#hero', component: () => import('../App.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})