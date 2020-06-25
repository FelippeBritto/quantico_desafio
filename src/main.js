import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';


const app = new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}
