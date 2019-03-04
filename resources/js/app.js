/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');

import Vue from 'vue';
import axios from "axios";

import router from './router';
window.Vue = require('vue');

import User from './helpers/User';
window.User = User;

import AppStorage from './helpers/AppStorage';
window.AppStorage = AppStorage;
window.axios = axios;
console.log(User.getId());
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

Vue.component('home-component', require('./components/Home.vue').default);
Vue.component('header-component', require('./components/AppHeader.vue').default);
Vue.component('footer-component', require('./components/AppFooter.vue').default);

Vue.component('navbar-component', require('./components/Navbar.vue').default);


/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router
});

import * as myJS from './myJs';