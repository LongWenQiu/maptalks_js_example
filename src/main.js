import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {staticDataService} from '../static/services/InstallService.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  beforeCreate () {
    // 加载配置文件
    staticDataService.getStaticData().then(res => {
      this.$store.commit('setConfig', res)
      this.$store.commit('setConfigLoaded', true)
    })
  },
  router,
  store,
  render: h => h(App)
})
