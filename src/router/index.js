import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import shop from '@/components/page/shop'
import cart from '@/components/page/cart'
import checkout from '@/components/page/checkout'
import contact from '@/components/page/contact'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            // name: 'HelloWorld',
            // component: HelloWorld
            redirect: { path: "home" }

        },
        {
            path: '/home',
            name: 'home',
            component: home
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: checkout
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact
        },

    ],

    mode: "history"
})
