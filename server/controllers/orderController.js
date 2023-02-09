const { CartProduct, Cart, Product, Order, OrderProduct } = require('../models/models')
class OrderController {

    async createOrder(req, res) {
        const {userId, deliveryId} = req.body
        const orderStatusId = 1 
        const paymentId = 1
        const date = Date.now()

        const orderProducts = []
        
        const cart = await Cart.findOne({ where: { userId } })

        const order = await Order.create({Date: date, userId, orderStatusId, deliveryId, paymentId})
        
        const cartProduct = await CartProduct.findAll({ where: { cartId: cart.Id } })

        const product = cartProduct.map(item => item.productId)

        for(let i = 0; i < product.length; i++)
        {
            const orderProduct = await OrderProduct.create({orderId: order.Id, productId: product[i]})
            const deletedCartProduct = await CartProduct.destroy({ where: { cartId: cart.Id, productId: product[i] } })
            orderProducts.push(orderProduct)
        }

        
        return res.json(orderProducts)
    }
}




module.exports = new OrderController()