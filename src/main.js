// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'// element-UI css
import '../src/assets/css/common.css'// 公用css
// import axios from 'axios'
import App from './App'
import router from './router'

Vue.use(ElementUI)
// Vue.use(axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
