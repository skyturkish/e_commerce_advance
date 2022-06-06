module.exports = class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    static create({ name, price }) {
        return new Product(name, price)
    }
}