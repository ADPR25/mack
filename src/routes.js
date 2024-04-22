import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/home.vue'
import Cangrulations from './views/tank_you.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Cangrulations',
    name: 'Cangrulations',
    component: Cangrulations
  }
]

export default routes