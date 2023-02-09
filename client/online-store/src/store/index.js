import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import cart from './modules/cart'
import products from './modules/products'
import user from './modules/user'
import order from './modules/order'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    products,
    user,
    order
  },
  plugins: [createPersistedState()],
})
