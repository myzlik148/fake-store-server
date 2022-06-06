require('../../db')

const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: 
    { type: String, required: true },
    category:
    { type: mongoose.Types.ObjectId,ref : "categories" ,required:true},
    image: { type: String }
})

const productModel =mongoose.model("products",productSchema)
module.exports=productModel