import Vue from 'vue'
import App from './App.vue'
import router from './router'
import eleui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store.js'

Vue.config.productionTip = false
Vue.use(eleui);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
