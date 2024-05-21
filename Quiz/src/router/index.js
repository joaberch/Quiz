import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeMenu.vue';
import PeriodicTable from '../views/periodicTable/periodictable.vue';
import anglais from '../views/anglais/anglais.vue';
import allemand from '../views/allemand/allemand.vue';
import capital from '../views/capital/capital.vue';
import constellation from '../views/constellation/constellation.vue';
import drapeau from '../views/drapeau/drapeau.vue';
import especeAnimal from '../views/especeAnimal/especeAnimal.vue';
import multiplication from '../views/multiplication/multiplication.vue';
import pi from '../views/pi/pi.vue';
import systemeSolaire from '../views/systemeSolaire/systemeSolaire.vue';

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
    path: '/anglais',
    name: 'anglais',
    component: anglais,
  },
  {
    path: '/allemand',
    name: 'allemand',
    component: allemand,
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