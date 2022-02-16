import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/components/carousel#hero', component: () => import('../App.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})