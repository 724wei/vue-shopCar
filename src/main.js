import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
axios.defaults.baseURL = 'https://applet-base-api-t.itheima.net'
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
