import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods';

const router = new VueRouter({
  routers: [
    { path: '/goods', component: goods }
  ]
}).$mount('#app');

