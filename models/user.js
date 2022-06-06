module.exports = class User {
    constructor(name, age, shoppingList = [], id) {
        this.name = name
        this.age = age
        this.shoppingList = shoppingList
        this.id = id
    }
    addShoppingList(product) {
        this.shoppingList.push(product)
    }

    static create({ name, age, shoppingList, id }) {
        return new User(name, age, shoppingList, id)
    }
}