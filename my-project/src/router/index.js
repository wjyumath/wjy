import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Movie from '@/components/Movie'
import Cart from '@/components/Cart'
import Like from '@/components/Like'
import NewsList from '@/components/News/NewsList'
import NovelList from '@/components/novel/NovelList'
import Details from '@/components/novel/Details'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Home/Home',
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

        // 小说列表
        {
            path: '/novel/list',
            name: 'novel.list',
            component: NovelList
        },
        {
            path: '/novel/Details',
            name: 'Details',
            component: Details
        },

    ]
})