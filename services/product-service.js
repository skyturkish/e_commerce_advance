const BaseService = require('./base-service')
const ProductModel = require('../models/product')

class ProductService extends BaseService {
    model = ProductModel
}

module.exports = new ProductService()