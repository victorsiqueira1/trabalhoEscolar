import Hello from '@/views/Hello.vue'
import Meio from '@/views/Meio.vue'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Meio
    },
    {
      path: '/resume',
      component: Hello
    }
  ]
})
