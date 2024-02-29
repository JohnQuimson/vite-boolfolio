import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './pages/AppHome.vue';
import ProjectList from './pages/ProjectList.vue';
import AppDetails from './pages/AppDetails.vue';
import ProjectDetail from './pages/ProjectDetail.vue';
import AppAbout from './pages/AppAbout.vue';
import AppContacts from './pages/AppContacts.vue';

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
    {
      path: '/about',
      name: 'about',
      component: AppAbout,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: AppContacts,
    },
  ],
});

export { router };
