import { DefaultAPIInstatnce } from "@/http";
import { AuthAPI } from "@/http/AuthAPI";
import { RegAPI } from "@/http/RegAPI";
import { UserAPI } from "@/http/UserAPI";

const state = {
    user: null,
    credentials: {
        token: localStorage.getItem('token') || null,
        userRole: localStorage.getItem('userRole') || null,
    },
}

const getters = {

    getUserRole: (state) => state.credentials.userRole,
    getUser: (state) => state.user,

}

const actions = {

    ON_LOGIN({commit}, {Email, Password}) {
        return AuthAPI.login(Email, Password).then((res) => {
            console.log(JSON.stringify(res));
            commit('setToken', res.data.token);
            commit('setUserRole', res.data.user.Role);
            commit('setUser', res.data.user);
            DefaultAPIInstatnce.defaults.headers['authorization'] = 'Bearer ' + res.token;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
        
    },

    ON_LOGOUT({commit}){
        commit('deleteToken');
        commit('deleteUserRole');
        commit('deleteUser');
        commit('deleteCart');
        delete DefaultAPIInstatnce.defaults.headers['authorization'];
    },

    ON_REGISTRATION({commit}, {Email, Password}) {
        return RegAPI.registration(Email, Password).then((res) => {
            console.log(JSON.stringify(res));
            commit('setToken', res.data.token);
            commit('setUserRole', "USER");
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
        
    },

    ON_SAVE_USER_DATA({commit}, {Id, Email, FirstName, SecondName, Phone}) {
        return UserAPI.setUserData(Id, Email, FirstName, SecondName, Phone).then((res) => {
            console.log(JSON.stringify(res));
            commit('setUserRole', "USER");
            commit('setUser', res.data.user);
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
        
    },

}

const mutations = {

    setToken(state, token) {
        state.credentials.token = token;
        localStorage.setItem('token', token);
    },

    setUserRole(state, userRole) {
        state.credentials.userRole = userRole;
        localStorage.setItem('userRole', userRole);
    },

    setUser(state, user) {
        state.user = user;
        localStorage.setItem('user', JSON.stringify(user));
    },

    deleteToken(state) {
        state.credentials.token = null;
        localStorage.removeItem('token');
    },

    deleteUserRole(state) {
        state.credentials.userRole = null;
        localStorage.removeItem('userRole');
    },

    deleteUser(state) {
        state.user = null;
        localStorage.removeItem('user');
    },

    deleteCart(state) {
        state.cart == null;
        state.cartProducts = null,
        localStorage.removeItem('cart');
        localStorage.removeItem('cartProducts');
    },
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
