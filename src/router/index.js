import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/page/home'
import shop from '@/components/page/shop'
import cart from '@/components/page/cart'
import checkout from '@/components/page/checkout'
import contact from '@/components/page/contact'
import admin_home from '@/components/admin_page/admin_home'
import admin_product from '@/components/admin_page/admin_products'
import admin_order from '@/components/admin_page/admin_orders'
import product_edit from '@/components/admin_page/product_edit'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            // name: 'HelloWorld',
            // component: HelloWorld
            redirect: { path: "home" }

        },
        {
            path: '/home',
            name: 'home',
            component: home,

        },
        {
            path: '/shop',
            name: 'shop',
            component: shop,
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: checkout,
        },
        {
            path: '/contact',
            name: 'contact',
            component: contact,
        },
        {
            path: '/admin_home',
            name: 'admin_home',
            component: admin_home,
        },
        {
            path: '/admin_products',
            name: 'admin_product',
            component: admin_product,
        },
        {
            path: '/admin_orders',
            name: 'admin_order',
            component: admin_order,
        },
        {
            path: '/product_edits',
            name: 'product_edit',
            component: product_edit,
        },


    ],

    mode: "history"
})
