const BaseService = require('./base-service')
const UserModel = require('../models/user')

class UserService extends BaseService {
    model = UserModel


    async attendSeller(user, seller) {
        user.shoppingList.push(seller)
        seller.productList.push(user)
        await user.save()
        await seller.save()
    }

}

module.exports = new UserService()