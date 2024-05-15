// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/homeMenu.vue';
import PeriodicTable from '../views/periodicTable/periodictable.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/periodicTable',
    name: 'PeriodicTable',
    component: PeriodicTable,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;