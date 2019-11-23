import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles'
import VueRouter from 'vue-router'

Vue.use(VueParticles, VueRouter)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
