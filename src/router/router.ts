import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Impressum from '../views/Impressum.vue';
import Datenschutz from '../views/Datenschutz.vue';
import AGB from '../views/agb.vue';

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
  },
  {
    path: '/agb',
    name: 'AGB',
    component: AGB
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
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