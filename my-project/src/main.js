// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置axios
import Axios from 'axios'
Axios.defaults.baseURL = 'https://api.apiopen.top/'
Vue.prototype.$axios = Axios

// 配置mintui
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})