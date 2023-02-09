// import { DefaultAPIInstatnce } from "@/http";
import { ProductsAPI } from '@/http/ProductsAPI';

const state = {
    
    products: [],
    categories: [],
    
}

const getters = {

    getProducts: (state) => state.products,
    getCategories: (state) => state.categories,

}

const actions = {

    GET_PRODUCTS_FROM_API({commit}, categoryId) {
        return ProductsAPI.getAllProducts(categoryId)
        .then((res) =>{
            console.log(res.data);
            commit('setProducts', res.data);
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },

    GET_CATEGORIES_FROM_API({commit})
    {
        return ProductsAPI.getAllCategories()
        .then((res) =>{
            console.log(res.data);
            commit('setCategories', res.data);
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    }

}

const mutations = {

    setProducts(state, products) {
        state.products = products;
        localStorage.setItem('products', JSON.stringify(products));
    },

    setCategories(state, categories) {
        state.categories = categories;
    },
    
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
