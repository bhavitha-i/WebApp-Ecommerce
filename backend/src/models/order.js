const mongoose = require('mongoose')
const validator = require('validator')

const orderSchema = new mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Customer'
    },
    address:{
        type: mongoose.Schema.Types.ObjectId
    },
    cart:{
        type: mongoose.Schema.Types.ObjectId,
        
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