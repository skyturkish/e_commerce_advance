const BaseService = require('./base-service')
const ProductModel = require('../models/product')

class ProductService extends BaseService {
    constructor() {
        super(ProductModel, `${__dirname}/../product-database.json`)
    }
}

module.exports = new ProductService()