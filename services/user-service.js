const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel
    async addProduct(user, product) {
        user.shoppingList.push(product)
        await user.save()
    }
}

module.exports = new UserService()