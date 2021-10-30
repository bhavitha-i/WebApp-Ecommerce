const express = require('express')
const Cart = require('../models/cart')
const auth = require('../middleware/customerAuth')
const router = new express.Router()



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

router.get('/carts/:id', async (req,res)=>{
    const _id = req.params.id
    
    try{
        const cart = await Cart.findById({_id})
        res.send(cart)
        

    }catch(e){
        res.status(500).send(e)
    }
 
})



// //update customer

router.patch('/cart/:id', async (req,res)=>{
    console.log("inside cart patch")
    const updates = Object.keys(req.body)
    
    try{
        const cart = await Cart.findById(req.params.id)

        updates.forEach((update) => cart[update] = req.body[update])

        await cart.save()
        
        if(!cart){
            console.log("inside not found")
            return res.status(404).send()
        }
        res.status(200).send(cart)
    }catch(e){
        
            res.body(e)
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
