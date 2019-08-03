// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 配置axios
import Axios from 'axios'
// Axios.defaults.baseURL = 'https://api.apiopen.top/'
Vue.prototype.$axios = Axios

// 配置mintui
import MintUI from 'mint-ui'
// 引入css
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入自己的css
import './assets/css/global.css'

import MyUl from '@/components/common/MyUl'
import MyLi from '@/components/common/MyLi'
import NavBar from '@/components/common/NavBar'
Vue.component(MyUl.name, MyUl)
Vue.component(MyLi.name, MyLi)
Vue.component(NavBar.name, NavBar)

import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video

import storage from './localstorage.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})