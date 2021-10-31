const express = require('express')
const Cart = require('../models/cart')
const auth = require('../middleware/customerAuth')
const router = new express.Router()
const Product = require('../models/product')
const prodDetails = require('../middleware/getprod')




router.post('/cart/add', auth,async (req,res) =>{
    console.log('inside cart add')
    const cart  = new Cart({...req.body,owner:req.customer._id})
    await cart.save().then(() =>{
   
     
        res.send(cart)


    }).catch((error)=>{
        res.status(400).send(error)
    })
})

// //get all vendors 
router.get('/cart/all', async (req,res)=>{
    console.log('inside cart get all')
    
    try{
        const carts = await Cart.find({})
        res.send(carts)

    }catch(e){
        res.status(500).send(e)
    }
 
})

router.get('/carts/:id', auth,async (req,res)=>{
    const _id = req.params.id
    
    try{
        const cart = await Cart.findOne({_id,owner:req.customer._id})
        res.send(cart)
        

    }catch(e){
        res.status(500).send(e)
    }
 
})

router.get('/cart/mine',auth, async (req,res)=>{
    console.log("inside cart patch")


  
    
    try{
    
     
        const cart =  await Cart.findOne({isActive:true,owner:req.customer._id})

        if(!cart){
            console.log("inside not found")
            return res.status(404).send()
        }
        res.status(200).send(cart)
    }catch(e){
        console.log(e)
        
            res.send(e)
    }
 
})




// //update customer

router.patch('/cart/mine',auth, async (req,res)=>{
    console.log("inside cart patch")
    const updates = Object.keys(req.body)

  
    
    try{
    
     
        const cart =  await Cart.findOne({isActive:true,owner:req.customer._id})
       

        updates.forEach((update) => cart[update] = req.body[update])

        await cart.save()
        
        if(!cart){
            console.log("inside not found")
            return res.status(404).send()
        }
        res.status(200).send(cart)
    }catch(e){
        console.log(e)
        
            res.send(e)
    }
 
})



// //delete vendor

router.delete('/cart/:id', async (req,res)=>{
    const _id = req.params.id
    
    try{
        const cart = await Cart.findByIdAndDelete(req.params.id)
        if(!cart){
            res.status(404).send()
        }
        res.send(cart)

    }catch(e){
        res.status(500).send(e)
    }
 
})

module.exports = router
