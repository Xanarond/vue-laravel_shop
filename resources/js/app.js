import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '../routes/router'
import {store} from './vuex/store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import App from "./views/App";

Vue.use(VueRouter)


Vue.use(VueMaterial);


const app = new Vue({
    el: '#app',
    components: {App},
    router,
    store
});
