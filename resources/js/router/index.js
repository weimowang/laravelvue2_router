

import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
import Home from '../components/Home.vue'
import Pageone from '../components/Pageone.vue'
//404 errorpath
import Errorpath from '../components/Errorpath.vue'

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/pageone',
            name: 'Pageone',
            component: Pageone
        },
        {
            path: '*',
            name: 'errorpath',
            component: Errorpath,
        }

    ],
});