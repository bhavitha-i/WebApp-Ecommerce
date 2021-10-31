const express = require('express')
const auth = require('../middleware/customerAuth')
const Order = require('../models/order')
const Customer = require('../models/customer')
const Cart = require('../models/cart')
const roduct = require('../models/product')
const cartDetails = require('../middleware/cartDetails')

const router = new express.Router()



router.post('/order/add', auth,async (req,res) =>{
    console.log('inside irder add')
    const order  = new Order({...req.body,owner:req.customer._id})
    console.log("1___________"+  order)
    const _id = req.customer.cart
    try{
    const cart = await Cart.findById(_id)
    cart.status = "order placed"
    cart.isActive = false
    await cart.save().then(()=>{
        console.log("saved")
    }).catch((error)=>{
        res.status(400).send(error)
    })

    const newCart = new Cart({owner:req.customer._id})
    await newCart.save().then(()=>{
        console.log("New cart created")
    }).catch((error)=>{
        res.status(400).send(error)
    })
    
    console.log("cart1",cart)
    }catch(err){
        console.log(err)
    }
    await order.save().then(() =>{
     
        res.send(order)

    }).catch((error)=>{
        res.status(400).send(error)
    })
})

// //get all vendors 
router.get('/order/all', async (req,res)=>{
    console.log('inside order get all')
    
    try{
        const orders = await Order.find({})
        res.send(orders)

    }catch(e){
        res.status(500).send(e)
    }
 
})

router.get('/orders/:id', async (req,res)=>{
    const _id = req.params.id
    
    try{
        const order = await Order.findById({_id})
        console.log("inside get orders")
        const owner = order.owner
        console.log(owner)
        const ownerinfo = Customer.findById({owner})
        console.log(ownerinfo)
        res.send(order)
        

    }catch(e){
        res.status(500).send(e)
    }
 
})



// //update customer

router.patch('/order/:id', async (req,res)=>{
    console.log("inside order patch")
    const updates = Object.keys(req.body)
    
    try{
        const order = await Order.findById(req.params.id)

        updates.forEach((update) => order[update] = req.body[update])

        await order.save()
        
        if(!order){
            console.log("inside not found")
            return res.status(404).send()
        }
        res.status(200).send(order)
    }catch(e){
        
            res.body(e)
    }
 
})



// //delete vendor

router.delete('/order/:id', async (req,res)=>{
    const _id = req.params.id
    
    try{
        const order = await Order.findByIdAndDelete(req.params.id)
        if(!order){
            res.status(404).send()
        }
        res.send(order)

    }catch(e){
        res.status(500).send(e)
    }
 
})

module.exports = router
