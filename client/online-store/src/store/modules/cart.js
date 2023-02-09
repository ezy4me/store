import { CartAPI } from '@/http/CartAPI';

const state = {
    
    cart: [],

}


const getters = {
  
    getCart: (state) => state.cart,

}

const actions = {

    ADD_PRODUCT_TO_CART({commit}, {userId, productId}) {
        return CartAPI.addProduct(userId, productId).then((res) => {
            console.log("add "+ JSON.stringify(res.data));
            commit('setCart', res.data);
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },

    DELETE_PRODUCT_FROM_CART({commit}, {userId, productId}) {
        console.log(productId);
        return CartAPI.deleteProduct(userId, productId).then((res) => {
            console.log("delete : "+ JSON.stringify(res.data));
            commit('setCart', res.data);
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },

    GET_CART_FROM_API({commit}, {userId}) {
        return CartAPI.getProducts(userId).then((res) =>{
            commit('setCart', res.data);
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },

}

const mutations = {

    setCart(state, products){
        state.cart = products;
        localStorage.setItem('cart', JSON.stringify(products));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
