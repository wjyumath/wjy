import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Movie from '@/components/Movie'
import Cart from '@/components/Cart'
import Like from '@/components/Like'
import NewsList from '@/components/News/NewsList'
import NovelList from '@/components/novel/NovelList'
import Details from '@/components/novel/Details'
import Login from '@/components/User/Login'
import Regeister from '@/components/User/Regeister'
import UserDetail from '@/components/User/UserDetail'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: { name: 'Home' }
        },
        {
            path: '/Home/Home',
            name: 'Home',
            component: Home
        },
        {
            path: '/Movie',
            name: 'Movie',
            component: Movie
        },
        {
            path: '/Cart',
            name: 'Cart',
            component: Cart
        },
        {
            path: '/Like',
            name: 'Like',
            component: Like
        },
        // 新闻列表
        {
            path: '/news/list',
            name: 'news.list',
            component: NewsList
        },

        // 音乐列表
        {
            path: '/novel/list',
            name: 'novel.list',
            component: NovelList
        },
        // 音乐详情
        {
            path: '/novel/Details',
            name: 'Details',
            component: Details
        },
        // 登录页面
        {
            path: '/User/Login',
            name: 'Login',
            component: Login
        },
        // 注册页面
        {
            path: '/User/Regeister',
            name: 'Regeister',
            component: Regeister
        },
        // 注册详情
        {
            path: '/User/UserDetail',
            name: 'UserDetail',
            component: UserDetail
        },

    ]
})