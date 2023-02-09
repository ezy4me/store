const Router = require('express')

const router = new Router()

const userRouter = require('./userRouter')
const brandRouter = require('./brandRouter')
const categoryRouter = require('./categoryRouter')
const productRouter = require('./productRouter')
const cartRouter = require('./cartRouter')
const orderRouter = require('./orderRouter')


router.use('/user', userRouter)
router.use('/product',productRouter)
router.use('/category',categoryRouter)
router.use('/brand', brandRouter)
router.use('/cart', cartRouter)
router.use('/order', orderRouter)


module.exports = router 