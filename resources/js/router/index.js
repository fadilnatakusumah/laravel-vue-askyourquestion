import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// router view components
import Login from '../components/login/Login.vue';
import Forum from '../components/forum/Forum.vue';

const routes = [
    { path: '/login', component: Login },
    { path: '/forum', component: Forum },
]

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

export default router;

