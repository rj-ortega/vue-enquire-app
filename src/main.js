import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import VueRouter from 'vue-router'

import Demo from './views/Demo'
import Home from './views/Home'


Vue.use(VueParticles)
Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [{
  path: "/",
  name: "home",
  component: Home
}, {
  path: "/demo",
  name: "demo",
  component: Demo
}]


const router = new VueRouter({
  routes
})


new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
