import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Impressum from '../views/Impressum.vue';
import Datenschutz from '../views/Datenschutz.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/impressum',
    name: 'Impressum',
    component: Impressum
  },
  {
    path: '/datenschutz',
    name: 'Datenschutz',
    component: Datenschutz
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If the user uses browser navigation buttons and a saved position exists
    if (savedPosition) {
      return savedPosition
    }

    // Otherwise, scroll to top
    return {
      top: 0,
      behavior: 'instant' // Changed from 'smooth' to ensure immediate scrolling
    }
  }
});

export default router; 