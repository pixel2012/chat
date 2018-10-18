import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: require('@/components/Login').default
        },
        {
            path: '/main',
            name: 'main',
            component: require('@/components/Main').default,
            children:[
                {
                    path: 'session',
                    name: 'session',
                    component: require('@/components/Session').default
                },
                {
                    path: 'group',
                    name: 'group',
                    component: require('@/components/Group').default
                },
            ]

        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
