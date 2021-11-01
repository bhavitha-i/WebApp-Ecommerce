const mongoose = require('mongoose')

//Local mongodb://localhost:27017/webAppv3
//DB Atlas mongodb+srv://expoadmin:expoadmin123@cluster0.lqrpt.mongodb.net/expo-api?retryWrites=true
mongoose.connect("mongodb+srv://expoadmin:expoadmin123@cluster0.lqrpt.mongodb.net/expo-api?retryWrites=true",{
    useNewUrlParser: true,
    useCreateIndex: true,
    userFindAndModify: false
})


// const User = mongoose.model('User',{
//         name:{
//             type: String
//         },
//         age:{
//             type: Number
//         }

// })

// const Product = mongoose.model('Product',{
//     name:{
//         type: String
//     },
//     quantity:{
//         type: Number
//     }

// })
// const me  = new User({
//     name: "Gopi",
//     age:25
// })

// const saraku = new Product({
//     name:'Gross',
//     quantity:5
// })

// // me.save().then( ()=>{
// //     console.log(me)
// // }).catch((error) =>{
// //     console.log('Error:',error)
// // })




// const User = mongoose.model('User',{
//         name:{
//             type: String
//         },
//         age:{
//             type: Number
//         }

// })


// const Vendor = mongoose.model('Vendor',{
//     name:{
//         type:String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     age: {
//         type: Number,
//         required: true
//     },
//     contact:{
//         type: String,
//         required: true
//     },
//     address:{
//         type: String,
//         required: true
//     }
// })

// const address =  mongoose.model('Address',{
//     apt_no:{
//         type: String,
//         required: true
//     },
//     streetName:{
//         type: String,
//         required: true
//     },
//     city:{
//         type: String,
//         required: true
//     },
//     state:{
//         type: String,
//         required: true
//     },
//     country:{
//         type: String,
//         required: true
//     },
//     zipcode:{
//         type: String,
//         required: true
//     }


// })

// const Customer = mongoose.model('Customer',{
//     name:{
//         type: String,
//         required: true
//     },
//     email:{
//         type: String,
//         required: true
//     },
//     age:{
//         type: Number,
//         required: true
//     },
//     contact:{
//         type: String,
//         required: true
//     },
//     address:{
//         type: [mongoose.Schema.Types.ObjectId],
//         required:true
        
//     },
//     cart:{
//         type: mongoose.Schema.Types.ObjectId
//     }

// })


// const Product =  mongoose.model('Product',{
//     name:{
//         type: String,
//         required: true
//     },
//     description:{
//         type: String,
//         required: true
//     },
//     price:{
//         type: Number,
//         required: true,
//         validate(value){
//             if(value<0){
//                 throw new Error('price cant be negitve')
//             }
//         }
//     },
//     quantity:{
//         type: Number,
//         required: true
//     },
//     owner:{
//         type: mongoose.Schema.Types.ObjectId,
//         required: true
//     },
//     size:{
//         type: String,
      
//     },
//     color:
//     {
//         type: String
//     }


// })
// const Cart = mongoose.model('Cart',{
//     owner:{
//         type: mongoose.Schema.Types.ObjectId,
//         required: true
//     },
//     productlist:[{
//         quantity: {type:Number},
//         product:{
//         type: mongoose.Schema.Types.ObjectId}
//     }],
//     price:{
//         type:Number,
//         default: 0
//     }
// })

// const order = mongoose.model('Order',{
//     owner:{
//         type:mongoose.Schema.Types.ObjectId,
//         required: true
//     },
//     address:{
//         type: String
//     },
//     cart:{
//         type: mongoose.Schema.Types.ObjectId,
        
//     },
//     createdAt: {
//         type: Date,
//         default: new Date(),
//     }

// })



// const vendor1 = new Vendor({
//     name:"Vendor1",
//     email:"vendor1@gmail.com",
//     age:25,
//     contact:39393939393,
//     address:"Denton"
// })


// vendor1.save().then( () =>{
//     console.log(vendor1)
// }).catch((error) =>{
//     console.log('Error:',error)
// })

// 6175f3d8d402e1061474941c

// const product2 = new Product({
//     name: "product 2",
//     description:"This is a product",
//     quantity: 25,
//     price: -345,
//     owner:'6175f3d8d402e1061474941c',
    

// })


// product2.save().then( () =>{
//     console.log(product1)
// }).catch((error) =>{
//     console.log('Error:',error)
// })


// const cart1 = new Cart({
//     owner:'6175f3d8d402e1061474941c',
//     productlist:{
//         quantity:2,
//         product:'6175f50a195d770626197744',

//     }
    

// })
 

// cart1.save().then( () =>{
//         console.log(cart1)
//     }).catch((error) =>{
//         console.log('Error:',error)
//     })