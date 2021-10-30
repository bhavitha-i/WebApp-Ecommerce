const mongoose = require('mongoose')
const validator = require('validator')

const cartSchema = new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Customer'
    },
    productlist:[{
        quantity: {type:Number},
        product:{
        type: mongoose.Schema.Types.ObjectId}
    }],
    price:{
        type:Number,
        default: 0
    }
})

const Cart = mongoose.model('Cart',cartSchema)

module.exports = Cart