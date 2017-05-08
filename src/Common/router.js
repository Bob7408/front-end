import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const BlogView  = () => System.import('../Views/BlogView.vue');
const HomeView  = () => System.import('../Views/HomeView.vue');
const AboutView = () => System.import('../Views/AboutView.vue');

const NotFoundView = () => System.import('../Views/404View.vue');

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),

  linkActiveClass: '',
  linkExactActiveClass: 'link-active',

  routes: [
    { path: '/', component: HomeView },
    { path: '/nous', component: AboutView, alias: '/us' },
    { path: '/blog', component: BlogView },
    { path: '/*', component: NotFoundView }
  ]
})
