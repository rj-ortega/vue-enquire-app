import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import VueRouter from 'vue-router'

import Demo from './views/Demo'
import VueParticle from './components/VueParticles'


Vue.use(VueParticles)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  routes // short for `routes: routes`
})

const routes = [
  [{
    path: "/demo",
    name: "demo",
    component: Demo,
  },
  {
    path: "/",
    name: "home",
    component: VueParticle,
  }]
]

new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
