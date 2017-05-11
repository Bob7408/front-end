import Vue     from 'vue';
import Vuetify from 'vuetify';

import App    from './App.vue';
import router from './Common/router.js';
 
Vue.use(Vuetify);

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

export { app, router };