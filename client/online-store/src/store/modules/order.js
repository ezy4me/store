import { OrderAPI } from '@/http/OrderAPI';

const state = {
    
    order: [],

}


const getters = {
  
    getOrder: (state) => state.order,

}

const actions = {

    ADD_ORDER({commit}, {userId, deliveryId}) {
        return OrderAPI.addOrder(userId, deliveryId).then((res) => {
            console.log("add "+ JSON.stringify(res.data));
            commit('setOrder', res.data);
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },

}

const mutations = {

    setOrder(state, order){
        state.order = order;
        localStorage.setItem('order', JSON.stringify(order));
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
