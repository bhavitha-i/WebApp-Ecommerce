const express = require('express')
const Address = require('../models/address')
const Customer = require('../models/customer')
const auth = require('../middleware/customerAuth')

const router = new express.Router()



router.post('/address/add', async (req,res) =>{
    console.log('inside address add')
    const address  = new Address(req.body)
    await address.save().then(() =>{
   
     
        res.send(address)


    }).catch((error)=>{
        res.status(400).send(error)
    })
})

// //get all vendors 
router.get('/address/all', async (req,res)=>{
    console.log('inside address get all')
    
    try{
        const addresses = await Address.find({})
        res.send(addresses)

    }catch(e){
        res.status(500).send(e)
    }
 
})

router.get('/address/:id', async (req,res)=>{
    const _id = req.params.id
    
    try{
        const address = await Address.findById({_id})
        res.send(address)
        

    }catch(e){
        res.status(500).send(e)
    }
 
})

router.get('/address/mine', auth, async (req,res)=>{
    console.log('inside address min get all')
    
    try{
        await req.vendor.populate('addresses').execPopulate()
    
        res.send(req.vendor.addresses)

    }catch(e){
        res.status(500).send(e)
    }
 
})





// //update customer

router.patch('/address/:id',auth, async (req,res)=>{
    console.log("inside patch")
    const updates = Object.keys(req.body)
    
    try{
        const address = await Address.findOne({_id:req.params.id,owner:req.customer._id})

        updates.forEach((update) => address[update] = req.body[update])

        await address.save()
        
        if(!address){
            console.log("inside not found")
            return res.status(404).send()
        }
        res.status(200).send(address)
    }catch(e){
        
            res.status(500).send(e)
    }
 
})



// //delete vendor

router.delete('/address/:id', auth, async (req,res)=>{
    const _id = req.params.id
    
    try{
        const address = await Address.findByIdAndDelete({_id:req.params.id,owner:req.customer._id})
        if(!address){
            res.status(404).send()
        }
        res.send(address)

    }catch(e){
        res.status(500).send(e)
    }
 
})

module.exports = router
