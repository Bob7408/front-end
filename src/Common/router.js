import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const BlogView       = () => System.import('../Views/BlogView.vue');
const HomeView       = () => System.import('../Views/HomeView.vue');
const AboutView      = () => System.import('../Views/AboutView.vue');
const ArticleView    = () => System.import('../Views/ArticleView.vue');
const CalendarView   = () => System.import('../Views/CalendarView.vue');
const ActivitiesView = () => System.import('../Views/ActivitiesView.vue');
const ParicipateView = () => System.import('../Views/ParticipateView.vue');
const ContactView    = () => System.import('../Views/ContactView.vue');
const PartnerView    = () => System.import('../Views/PartnerView.vue');
const ServicesView   = () => System.import('../Views/ServicesView.vue');
const AdhesionView   = () => System.import('../Views/AdhesionView.vue');
const NotFoundView   = () => System.import('../Views/404View.vue');

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),

  linkActiveClass: '',
  linkExactActiveClass: 'link-active',

  routes: [
    { path: '/', component: HomeView },
    { path: '/nous', component: AboutView, alias: '/us' },
    { path: '/blog', component: BlogView,  alias: '/articles' },
    { path: '/article/:id', component: ArticleView, props: true },
    { path: '/calendrier', component: CalendarView, alias: '/agenda' },
    { path: '/activites', component: ActivitiesView },
    { path: '/participation', component: ParicipateView },
    { path: '/contact', component: ContactView },
    { path: '/partenaires', component: PartnerView },
    { path: '/services', component: ServicesView },
    { path: '/adhesion', component: AdhesionView },
    { path: '/*', component: NotFoundView }
  ]
})
