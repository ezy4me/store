const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')

class BrandController {
    async create(req,res) {
        const {Name} = req.body
        const brand = await Brand.create({Name})
        return res.json(brand)
    }

    async getAll(req,res) {
        const {Id} = req.query
        const brands = await Brand.findAll(
            {
                where: {Id},
                
            },
        )
        return res.json(brands)
    }

}

module.exports = new BrandController()