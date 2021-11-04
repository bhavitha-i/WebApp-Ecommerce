require('dotenv').config({
    path: './src/.env'
})

const express = require('express')
const cors = require("cors")


require('./db/mongoose');


const Customer = require('./models/customer')
const Vendor = require('./models/vendor')
const Address = require('./models/address')
const Cart = require('./models/cart')
const Order = require('./models/order')
const Product = require('./models/product')


const vendorRouter = require('./routers/vendor')
const customerRouter = require('./routers/customer')
const addressRouter = require('./routers/address')
const productRouter = require('./routers/product')
const cartRouter = require('./routers/cart')
const orderRouter = require('./routers/order')
const app = express()

const port = process.env.PORT || 5000

const multer = require('multer')
// const upload = multer({
//     dest:"images"
// })
// app.post('/upload',upload.single('upload'),(req,res) =>{
//     res.send()
// })





// For parsing application/json
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));
app.use(cors({
    origin:["http://localhost:3000"],
    credentials:true
}));



app.use(vendorRouter)
app.use(customerRouter)
app.use(addressRouter)
app.use(productRouter)
app.use(cartRouter)
app.use(orderRouter)

  
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));






// app.post('/vendors',(req,res)=>{
//     const customer  = new Customer(req.body)
//     console.log(req.body)

//     customer.save().then( () =>{
//         res.send(customer)
//     }).catch((error) =>{
//         res.status(400).send(error)

//     })
// })
// app.get('/vendors',(req,res) =>{
//     Customer.find({}).then((vendors) =>{
//         res.send(vendors)
//     }).catch((e) =>{
//         res.status(400).send(e)
//     })
// })

// app.get('/vendors/:id',(req,res)=>{
//     const _id = req.params.id
//     Vendor.findById({_id}).then((vendors) =>{
//         res.send(vendors)
//     }).catch((e) =>{
//         res.status(400).send(e)
//     })
// })

// app.patch('/vendors/:id', async(req,res) => {
//     console.log("inside patch")
//     const updates = Object.keys(req.body)
//     console.log(updates)
//     const allowedUpdates = ['name','password','age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if(!isValidOperation){
//         return res.status(400).send({error:'Invalid updates'})

//     }
//     try{
//         const vendor = await Customer.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators: true})
        
//         if(!vendor){
//             console.log("inside not found")
//             return res.status(404).send()
//         }
//         res.status(200).send(vendor)
//     }catch(e){
//         console.log(e)
//             res.body(e)
//     }}}

// })

// app.delete('/products/:id', async(req,res) =>{
//     try{
//         const product = await Product.findByIdAndDelete(req.params.id)

//         if(!product){
//             res.status(404).send()
//         }
//         res.send(product)

//     }catch(e){
//         res.status(500)
//     }
// })

// app.get('/products',(req,res)=>{
//     const _id = req.params.id
//     Product.find({}).then((products) =>{
//         res.send(products)
//     }).catch((e) =>{
//         res.status(400).send(e)
//     })
// })

// app.get('/products/:id',(req,res)=>{
//     const _id = req.params.id
//     Product.findById({_id}).then((products) =>{
//         res.send(products)
//     }).catch((e) =>{
//         res.status(400).send(e)
//     })
// })


// app.post('/products',(req,res)=>{
//     const product  = new Product(req.body)
//     console.log(req.body)

//     product.save().then( () =>{
//         res.send(product)
//     }).catch((error) =>{
//         res.status(400).send(error)

//     })
// })

app.listen(port,()=>{
    console.log('server is up on port '+ port)
})