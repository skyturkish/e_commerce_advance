const mongoose = require('mongoose')


const SellerSchema = new mongoose.Schema({
    name: String,
    products: String,
    productList: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'user',
        autopopulate: {
            maxDepth: 1
        }
    }]

})


const SellerModel = mongoose.model('Seller', SellerSchema)

SellerSchema.plugin(require('mongoose-autopopulate'))



module.exports = SellerModel





