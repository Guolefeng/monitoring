import { createRouter, createWebHashHistory } from 'vue-router';
import BaseLayout from '@/layouts/BaseLayout.vue';
import LoginPage from '@/pages/Login/index.vue';
import Task from '@/pages/Task/index.vue';
import Details from '@/pages/Details/index.vue';
import Daystat from '@/pages/Daystat/index.vue';
import Weekstat from '@/pages/Weekstat/index.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/login', name: 'login', component: LoginPage },
    {
      path: '/',
      component: BaseLayout,
      children: [
        { path: '', redirect: '/task' },
        { path: 'task', name: 'task', component: Task },
        { path: 'details', name: 'details', component: Details },
        { path: 'daystat', name: 'daystat', component: Daystat },
        { path: 'weekstat', name: 'weekstat', component: Weekstat },
      ],
    },
  ],
});

export default router;
