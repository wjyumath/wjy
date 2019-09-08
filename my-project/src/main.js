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
    // 引入分享组件
import SocialSharing from 'vue-social-share'
import 'vue-social-share/dist/client.css';

Vue.use(SocialSharing);
// 引入amap组件
import VueAMap from 'vue-amap';
import AMapManager from 'vue-amap';
import { lazyAMapApiLoaderInstance } from 'vue-amap';
Vue.config.productionTip = false;
Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
    key: 'db8838665adc82c34fbff686f02bb0e5',
    plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.Geolocation'],
    uiVersion: '1.0', // ui库版本，不配置不加载,
    v: '1.4.4'
});

// lazyAMapApiLoaderInstance.load().then(() => {
//     // your code ...
//     this.map = new AMap.Map('amapContainer', {
//         center: new AMap.LngLat(121.59996, 31.197646)
//     });
// });
import storage from './localstorage.js'

// 引入echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})