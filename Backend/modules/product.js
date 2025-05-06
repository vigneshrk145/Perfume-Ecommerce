const mongoose = require('mongoose');
const Products = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
       
    },
    publicId:String
    
})

const Product = mongoose.model('Product', Products);
module.exports = Product;