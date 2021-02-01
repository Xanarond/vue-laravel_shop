import VueRouter from "vue-router";
import Home from "../js/pages/catalog-page";
import orderBasket from "../js/pages/basket-page";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/basket',
            name: 'basket',
            component: orderBasket,
            props: true
        },
    ],
});

export default router;
