import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from '../components/goods/goods'; // 商品
import ratings from '../components/ratings/ratings'; // 评论
import seller from '../components/seller/seller';   // 商家

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ]
});

export default router;
