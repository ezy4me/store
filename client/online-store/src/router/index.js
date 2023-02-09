import { createRouter, createWebHistory } from 'vue-router'
import ShopView from '../views/ShopView.vue'
import AccountView from '../views/AccountView.vue'
import NotFountView from '../views/NotFoundView.vue'
import ProductView from '../views/ProductView.vue'
import CartView from '../views/CartView.vue'
import OrderView from '../views/OrderView.vue'
import PostPaymentView from '../views/PostPaymentView.vue'
import RefundView from '../views/RefundView.vue'
import SizeView from '../views/SizeView.vue'

const routes = [
  {
    path: '/',
    name: 'shop',
    component: ShopView
  },

  {
    path: '/:categoryId',
    name: 'shop-category',
    component: ShopView
  },

  {
    path: '/account',
    name: 'account',
    component: AccountView
  },

  {
    path: '/product/:Id',
    name: 'product',
    component: ProductView
  },

  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },

  {
    path: '/order',
    name: 'order',
    component: OrderView
  },

  {
    path: '/post-payment',
    name: 'post-payment',
    component: PostPaymentView
  },

  {
    path: '/size-information',
    name: 'size-information',
    component: SizeView
  },

  {
    path: '/refund',
    name: 'refund',
    component: RefundView
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFound",
    component: NotFountView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
