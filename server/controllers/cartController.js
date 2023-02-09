const { CartProduct, Cart, Product } = require('../models/models')
class CartController {
    async createProduct(req, res) {

        const { userId, productId } = req.body

        var Quantity = 1

        const cart = await Cart.findOne({ where: { userId } })

        if (cart) {
            const checkProduct = await CartProduct.findOne(
                {
                    where: {
                        cartId: cart.Id, productId
                    }
                }
            )
            if (checkProduct) {

                Quantity = checkProduct.Quantity + 1
                let values = { Quantity }
                let condition = { where: { Id: checkProduct.Id } };
                // let options = { multi: false };

                const updatedCartProduct = await CartProduct.update(
                    values, condition
                )

                const cartProduct = await CartProduct.findAndCountAll(
                    {
                        where:
                        {
                            cartId: cart.Id
                        },
                        include: { model: Product, as: 'product' }
                    }
                )

                return res.json(cartProduct)

            }
            else {
                let cartProduct = await CartProduct.create({ cartId: cart.Id, productId, Quantity })
                return res.json(cartProduct)
            }
            // return res.json(checkProduct);
        }

    }

    async getAll(req, res, next) {
        const { cartId } = req.params

        const cart = await Cart.findOne({ where: { userId: cartId } })

        const cartProduct = await CartProduct.findAndCountAll(
            {
                where:
                {
                    cartId: cart.Id
                },
                include: { model: Product, as: 'product' }
            },
        )

        return res.json(cartProduct)
    }

    async deleteOne(req, res) {
        const { userId, productId } = req.body

        const cart = await Cart.findOne({ where: { userId } })
        if (cart) {
            let deletedCartProduct = await CartProduct.destroy({ where: { cartId: cart.Id, productId } })

            const cartProduct = await CartProduct.findAndCountAll(
                {
                    where:
                    {
                        cartId: cart.Id
                    },
                    include: { model: Product, as: 'product' }
                },
            )

            return res.json(cartProduct)
        }
    }
}




module.exports = new CartController()