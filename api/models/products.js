const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},
        price: {type: String, required:true, unique:true},
        description: {type: String, required:true},
        img: {type:String, required:true},
        inventory: {type:Number, required: true},
        inStock: {type:Boolean, default:false},
        rating: {type:Number, required:true},
    },
        {timestamps: true}
)
        
        module.exports=mongoose.model("Product", ProductSchema)