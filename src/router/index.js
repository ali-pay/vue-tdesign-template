import Vue from 'vue';
import VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'example',
    component: () => import('@/views/example.vue'),
    children: [{ path: '', component: () => import('@/views/content.vue') }],
  },
];

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
