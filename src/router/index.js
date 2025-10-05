import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Spells from '@/components/Spells.vue'
import Movies from '@/components/Movies.vue'
import CharacterView from '@/views/CharacterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/CharacterView',
      name: 'characters',
      component: CharacterView,
    },
    {
      path: '/Spells',
      name: 'spells',
      component: Spells,
    },
    {
      path: '/Movies',
      name: 'movies',
      component: Movies,
    },
  ],
})

export default router
