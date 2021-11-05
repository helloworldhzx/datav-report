import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import VueECharts from 'vue-echarts'
import './style/index.css'
// import ECharts from 'echarts'
var ECharts = require('echarts')
console.log(VueECharts)
Vue.component('v-chart', VueECharts)
Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
