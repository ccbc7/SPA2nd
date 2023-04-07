import { createRouter, createWebHistory } from 'vue-router';
import TaskList from '@/components/TaskList.vue';
import TaskDetails from '@/components/TaskDetails.vue';

const routes = [
  {
    path: '/',
    name: 'TaskList',
    component: TaskList
  },
  {
    path: '/tasks/:id',
    name: 'TaskDetails',
    component: TaskDetails,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
