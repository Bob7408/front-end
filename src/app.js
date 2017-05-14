import Vue         from 'vue';
import Vuetify     from 'vuetify';
import VueResource from 'vue-resource';

import App    from './App.vue';
import router from './Common/router.js';

Vue.use(VueResource);
Vue.use(Vuetify);

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

Vue.http.options.root = '/api';
Vue.prototype.readableDate = (value) => new Date(value).toLocaleString('fr-FR');

// Debugging: allow specific url to be used.
const override = localStorage.getItem('root_override');

if (override)
  Vue.http.options.root = override;

export { app, router };