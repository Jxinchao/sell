import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from 'components/goods/goods'; // 商品
import ratings from 'components/ratings/ratings'; // 评论
import seller from 'components/seller/seller';   // 商家

Vue.use(VueRouter);

const router = new VueRouter({
  linkActiveClass: 'active', // 设置tab切换的类名
  routes: [
    { path: '/', component: goods },
    { path: '/goods', component: goods },
    { path: '/ratings', component: ratings },
    { path: '/seller', component: seller }
  ]
});

export default router;
