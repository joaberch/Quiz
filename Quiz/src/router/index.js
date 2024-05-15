// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeMenu.vue';
import PeriodicTable from '../views/periodicTable/periodictable.vue';
import SystemeSolaire from '../views/systemeSolaire/systemeSolaire.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/periodicTable',
    name: 'periodicTable',
    component: PeriodicTable,
  },
  {
    path: '/allemand',
    name: 'allemand',
    component: allemand,
  },
  {
    path: '/anglais',
    name: 'anglais',
    component: anglais,
  },
  {
    path: '/capital',
    name: 'capital',
    component: capital,
  },
  {
    path: '/constellation',
    name: 'constellation',
    component: constellation,
  },
  {
    path: '/drapeau',
    name: 'drapeau',
    component: drapeau,
  },
  {
    path: '/especeAnimal',
    name: 'especeAnimal',
    component: especeAnimal,
  },
  {
    path: '/multiplication',
    name: 'multiplication',
    component: multiplication,
  },
  {
    path: '/pi',
    name: 'pi',
    component: pi,
  },
  {
    path: '/systemeSolaire',
    name: 'systemeSolaire',
    component: systemeSolaire,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;