const mongoose = require('mongoose')


const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number
})

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel
