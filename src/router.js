import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppDetails from './pages/AppDetails.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectList,
    },
    {
      path: '/projects/:slug',
      name: 'single-project',
      component: ProjectDetail,
    },
    {
      path: '/details',
      name: 'details',
      component: AppDetails,
    },
  ],
});

export { router };
