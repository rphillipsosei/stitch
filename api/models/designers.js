const mongoose = require('mongoose');

const DesignerSchema = new mongoose.Schema(
    {
        name: {type:String, required:true, unique:true},
        desc: {type:String, required:true, unique:true},
        img: {type:String, required:true},
        rate: {type:Number, required:true},
        rating: {type:Number, required:true},
    },
        {timestamps: true}
)
        
        module.exports=mongoose.model("Designer", DesignerSchema)