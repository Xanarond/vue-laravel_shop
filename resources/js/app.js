import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router'
import App from './views/App'
import {store} from './store'

Vue.use(VueRouter)


const app = new Vue({
    el: '#app',
    components: {App},
    router,
    store
});
