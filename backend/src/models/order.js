const mongoose = require('mongoose')
const validator = require('validator')

const orderSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Customer'
    },
    address:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Address'
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Cart'
        
    },
    productlist:[{
        
        quantity: {type:Number},
        product:{
        type: mongoose.Schema.Types.ObjectId}
    }],
    price:{
        type:Number,
        default: 0
    },
    status:{
        type: String,
        default: 'order placed'
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }

})

const Order = mongoose.model('Order',orderSchema)

module.exports =  Order
