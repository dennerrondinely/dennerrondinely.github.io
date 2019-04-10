import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/index.vue';
import MainNavbar from '@/layout/mainNavbar.vue';
import MainFooter from '@/layout/mainFooter.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: 'black' }
      }
    }
  ]
});
