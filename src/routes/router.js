import Hello from '@/views/Hello.vue'
import Meio from '@/views/Meio.vue'
import Projetos from '@/views/Projetos.vue'
import Empresas from '@/views/Empresas.vue'
import Pessoal from '@/views/Pessoal.vue'	
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
    },
    {
      path: '/projetos',
      component: Projetos
    },
    {
      path: '/empresas',
      component: Empresas
    },
    {
      path:'/pessoal',
      component: Pessoal
    }
  ]
})
