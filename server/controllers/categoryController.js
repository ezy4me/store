const {Category} = require('../models/models')
const ApiError = require('../error/ApiError')

class CategoryController {
    async create(req,res) {
        const {Name} = req.body
        const category = await Category.create({Name})
        return res.json(category)
    }

    async getAll(req,res) {
        const categories = await Category.findAndCountAll()
        return res.json(categories)
    }

}

module.exports = new CategoryController()