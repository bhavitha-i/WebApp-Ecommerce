const jwt = require('jsonwebtoken')
const Vendor = require('../models/vendor')

const vendorAuth = async(req,res,next) =>{
    try{
        console.log('Before barrer')
        const token = req.header('Authorization').replace('Bearer ','')
        console.log('token verify')
        const decoded = jwt.verify(token,'thisismynewcourse')

        console.log(decoded)
        const vendor = await Vendor.findOne({_id:decoded._id,'tokens.token':token})
        console.log('after vendor')
        if(!vendor){
            
            throw new Error()
        }
        req.token = token
        req.vendor = vendor
        next()
        console.log(token)
   

    }catch(e){
        res.status(401).send({error: "Please authenticate"})
    }

}

module.exports = vendorAuth