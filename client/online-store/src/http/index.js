import axios from 'axios'

const loginConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const LoginAPIInstatnce = axios.create(loginConfig)

const defaultConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const DefaultAPIInstatnce = axios.create(defaultConfig)

const regConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const RegAPIInstatnce = axios.create(regConfig)

const productsConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const ProductsAPIInstatnce = axios.create(productsConfig)

const cartConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const CartAPIInstatnce = axios.create(cartConfig)

const userConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const UserAPIInstatnce = axios.create(userConfig)

const orderConfig = {
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
}

export const OrderAPIInstatnce = axios.create(orderConfig)