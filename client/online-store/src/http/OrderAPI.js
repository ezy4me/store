import { OrderAPIInstatnce  } from "./index";

export const OrderAPI = {
    addOrder(userId, deliveryId) {
        const url = 'api/order'
        const data = {userId, deliveryId}
        console.log(data);
        return OrderAPIInstatnce.post(url, data)
    },

}