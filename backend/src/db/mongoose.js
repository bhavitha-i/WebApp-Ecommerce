const mongoose = require('mongoose')

//Local mongodb://localhost:27017/webAppv3
//DB Atlas mongodb+srv://expoadmin:expoadmin123@cluster0.lqrpt.mongodb.net/expo-api?retryWrites=true
mongoose.connect("mongodb+srv://expoadmin:expoadmin123@cluster0.lqrpt.mongodb.net/expo-api?retryWrites=true",{
    useNewUrlParser: true,
    useCreateIndex: true,
    userFindAndModify: false
})

