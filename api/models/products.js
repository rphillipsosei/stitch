const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},
        price: {type: String, required:true, unique:true},
        description: {type: String, required:true},
        inventory: {type:number, required: true},
        inStock: {type:boolean, default:false},
    },
        {timestamps: true}
)
        
        module.exports=mongoose.model("Product", UserSchema)