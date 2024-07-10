import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/homeMenu.vue')
  },
  {
    path: '/start',
    name: 'start',
    component: () => import("../views/start/start.vue")
  },
  {
    path: '/periodicTable',
    name: 'periodicTable',
    component: () => import('../views/periodicTable/periodictable.vue')
  },
  {
    path: '/anglais',
    name: 'anglais',
    component: () => import('../views/anglais/anglais.vue')
  },
  {
    path: '/allemand',
    name: 'allemand',
    component: () => import('../views/allemand/allemand.vue')
  },
  {
    path: '/capital',
    name: 'capital',
    component: () => import('../views/capital/capital.vue')
  },
  {
    path: '/constellation',
    name: 'constellation',
    component: () => import('../views/constellation/constellation.vue')
  },
  {
    path: '/drapeau',
    name: 'drapeau',
    component: () => import('../views/drapeau/drapeau.vue')
  },
  {
    path: '/especeAnimal',
    name: 'especeAnimal',
    component: () => import('../views/especeAnimal/especeAnimal.vue')
  },
  {
    path: '/multiplication',
    name: 'multiplication',
    component: () => import('../views/multiplication/multiplication.vue')
  },
  {
    path: '/pi',
    name: 'pi',
    component: () => import('../views/pi/pi.vue')
  },
  {
    path: '/systemeSolaire',
    name: 'systemeSolaire',
    component: () => import('../views/systemeSolaire/systemeSolaire.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;