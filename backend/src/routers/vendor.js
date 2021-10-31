const express = require('express')
const Vendor = require('../models/vendor')
const auth = require('../middleware/vendorAuth')
const Product = require('../models/product')
const multer = require('multer')

const router = new express.Router()


// "email":"jwt@gmail.com",
// "password":"ABCacb@1234"

router.get('/test',(req,res) =>{
    res.send("From a new file")

})
//get all vendors just for backend purpose


// vendor singup
router.post('/vendor/signup', async (req,res) =>{
    const vendor  = new Vendor(req.body)
    try{
         console.log(vendor)
        await vendor.save()
        const token = await vendor.generateAuthToken()
        res.status(200).cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          }).send({vendor,token})
    } catch(e){
        res.status(400).send(e)
    }
    // await vendor.save().then(() =>{
    //     res.send(vendor)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })
})

router.post('/vendor/login',async(req,res)=>{
    try{
        const vendor = await Vendor.findByCredentials(req.body.email,req.body.password)
        const token = await vendor.generateAuthToken()
        res.status(200).cookie("token", token,"vendor",vendor, {
            httpOnly: true,
            secure: true,
            sameSite: "none",
          }).send({vendor,token})
    }catch(e){
        res.status(400).send()
    }
})

router.post('/vendor/logout',auth,async(req,res)=>{
    try{
        req.vendor.tokens = req.vendor.tokens.filter((token) =>{
            return token.token !== req.token
        })
        await req.vendor.save()

        res.send()

    }catch(e){
        res.status(500).send()
    }
})

router.post('/vendor/logoutAll',auth,async(req,res)=>{
    try{
        req.vendor.tokens = []
        await req.vendor.save()

        res.send()

    }catch(e){
        res.status(500).send()
    }
})

const upload = multer({
    dest: 'avatars',
    limits:{
        fileSize:1000000
    },
    fileFilter(req,file,cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload only images'))

        }
        cb(undefined,true)
    }
})

router.post('/vendor/me/avatar',upload.single('avatar'),(req,res)=>{
    res.send()
},(error,req,res,next)=>{
    res.status(400).send({error:error.message})
})


//get all vendors 
router.get('/vendors/all', auth ,async (req,res)=>{
    
    try{
        const vendors = await Vendor.find({})
        res.send(vendors)

    }catch(e){
        res.status(500).send(e)
    }
 
})
router.get('/vendors/me', auth ,async (req,res)=>{
    
 res.send(req.vendor)
 
})
router.get('/vendor/:id',auth,async (req,res)=>{
    const _id = req.params.id
    
    try{
        const vendors = await Vendor.findById({_id})
        res.send(vendors)

    }catch(e){
        res.status(500).send(e)
    }
 
})

router.patch('/vendors/me', auth ,async (req,res)=>{
    
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['firstName','lastName','contact','address','password','age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){

        return res.status(400).send({error:'Invalid updates'})

    }
    try{
        updates.forEach((update) =>
        req.vendor[update] = req.body[update])
    await req.vendor.save()
    res.send(req.vendor)

    }catch(e){
        res.status(400).send(e)
    }
    
   })


//update vendor

router.patch('/vendor/:id', auth,async (req,res)=>{
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','password','age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid updates'})

    }
    
    try{
        const vendor = await Vendor.findById(_id)

        updates.forEach((update) =>
            vendor[update] = req.body[update]

        )
        await vendor.save();

        // const vendor = await Vendor.findByIdAndUpdate(req.params.id,req.body,{new:true, runValidators: true})
        
        if(!vendor){
            console.log("inside not found")
            return res.status(404).send()
        }
        res.status(200).send(vendor)
    }catch(e){
        
            res.status(500).send(e)
            console.log(e)
    }
 
})

router.delete('/vendor/me',auth,async(req,res)=>{
    try{
        await req.vendor.remove()
        res.send(req.vendor)
    }catch(e){
        res.status(400).send()
    }
})





//delete vendor later should change to me


router.delete('/vendor/:id', auth,async (req,res)=>{
    const _id = req.params.id
    
    try{
        const vendor = await Vendor.findByIdAndDelete(req.params.id)
        if(!vendor){
            res.status(404).send()
        }
        res.send(vendor)

    }catch(e){
        res.status(500).send(e)
    }
 
})




module.exports = router