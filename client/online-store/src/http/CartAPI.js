import { CartAPIInstatnce  } from "./index";

export const CartAPI = {
    addProduct(userId, productId) {
        const url = 'api/cart/cart-products'
        const data = {userId, productId}
        console.log(data);
        return CartAPIInstatnce.post(url, data)
    },

    getProducts(userId) {
        // console.log(cartId);
        const url = 'api/cart/' + userId
        console.log(url);
        console.log("getProducts cart " + CartAPIInstatnce.get(url));
        return CartAPIInstatnce.get(url)
    },

    deleteProduct(userId, productId) {
        const url = 'api/cart/'
        const data = {userId, productId}

        console.log("delete from cart : " + userId + " " + productId);
        
        return CartAPIInstatnce.delete(url, {data})
       
    }
}