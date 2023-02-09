const Router = require('express')

const router = new Router()

const cartController = require('../controllers/cartController')

router.post('/cart-products', cartController.createProduct)
router.get('/:cartId', cartController.getAll)
router.delete('/', cartController.deleteOne)

module.exports = router 