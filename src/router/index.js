import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/index.html',
      name: 'home',
      component: Home,
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "fof" */ '../views/404.vue'),
    },
  ],
});