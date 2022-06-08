const BaseService = require('./base-service')
const SellerModel = require('../models/seller')

class SellerService extends BaseService {
    model = SellerModel
}

module.exports = new SellerService()