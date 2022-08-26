const PatternSchema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},
        desc: {type: String, required:true, unique:true},
        img: {type:String, required:true},
        inventory: {type: Number, required: true},
        price: {type:Number, required:true},
        plusSize: {type:Boolean, default: false},
        rating: {type:Number, required:true},
    },
        {timestamps: true}
)
        
        module.exports=mongoose.model("Pattern", PatternSchema)