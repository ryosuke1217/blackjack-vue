// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import store from './store/store'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: colors.blue.lighten1 // #42A5F5
  }
})
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
