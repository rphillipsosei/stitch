const mongoose = require('mongoose');

const DesignerSchema = new mongoose.Schema(
    {
        name: {type: String, required:true, unique:true},
        desc: {type: String, required:true, unique:true},
        img: {type:string, required:true},
        rate: {type:number, required:true},
        rating: {type: number, required:true},
    },
        {timestamps: true}
)
        
        module.exports=mongoose.model("Designer", DesignerSchema)