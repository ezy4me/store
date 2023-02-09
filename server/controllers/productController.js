const {Product} = require('../models/models')
const {ProductInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProductController {
    async create(req,res) {
        const {Name, Price, Image, Count, Description, categoryId, brandId, productStatusId} = req.body
        const product = await Product.create({Name, Price, Image, Count, Description, categoryId, brandId, productStatusId})
        return res.json({product})
    }

    async getAll(req,res) {
        const{brandId, categoryId} = req.query
        // page = page || 1
        // limit = limit || 9
        // let offset = page* limit - limit
        let products
        if(!brandId && !categoryId){
            products = await Product.findAndCountAll()
            return res.json(products)
        }
        if(brandId && !categoryId){
            products = await Product.findAndCountAll({where: {brandId}, limit, offset})
            return res.json(products)
        }
        if(!brandId && categoryId){
            products = await Product.findAndCountAll({where: {categoryId}})
            return res.json(products)
        }
        if(brandId && categoryId){
            products = await Product.findAndCountAll({where: {CategoryId, brandId}, limit, offset})
            return res.json(products)
        }
    }

    async getOne(req,res) {
        const {Id} = req.params
        const product = await Product.findOne(
            {
                where: {Id},
                include: [{model: ProductInfo, as: 'info'}]
                
            },
        )
        return res.json(product)
    }

}

module.exports = new ProductController()