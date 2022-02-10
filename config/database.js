const mongoose = require('mongoose')
require('dotenv').config()
const MONGO_URL = process.env.MONGO_URL

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
}).then(()=>console.log("Connected to the database")).catch(err=>console.log(err))