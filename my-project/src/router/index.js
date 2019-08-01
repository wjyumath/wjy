import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movie from '@/components/Movie'
import Cart from '@/components/Cart'
import Like from '@/components/Like'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/Home',
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

    ]
})