const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2
    },
    age: {
        type: Number,
        required: true,
        default: 18
    },
    shoppingList: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'product',
        autopopulate: {
            maxDepth: 1
        }
    }]

})


UserSchema.methods.findPeersOver18 = function (cb) {
    return UserModel.find({
        age: {
            $gte: 18
        }
    });
};

const UserModel = mongoose.model('User', UserSchema)


UserSchema.plugin(require('mongoose-autopopulate'))


module.exports = UserModel


