const mongoose = require('mongoose')
const validator = require('validator')

const addressSchmea =  new mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Customer'

    },

    apt_no:{
        type: String,
        required: true
    },
    streetName:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    zipcode:{
        type: String,
        required: true
    }


})

const Address = mongoose.model('Address',addressSchmea)

module.exports =  Address
