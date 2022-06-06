module.exports = class Seller {
    constructor(name, products = [], id) {
        this.name = name
        this.products = products
        this.id = id

    }
    static create({ name, products, id }) {
        return new Seller(name, products, id)
    }
}