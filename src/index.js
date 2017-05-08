import Vue from 'vue'
import App from './App.vue'
import router from './Common/router.js'

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

export { app, router }
