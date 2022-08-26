const DesignerSchema = new mongoose.Schema(
    {
        title: {type: String, required:true, unique:true},
        desc: {type: String, required:true, unique:true},
        img: {type:string, required:true},
        rate: {type:number, required:true},
        plusSize: {boolean, default: false},
        rating: {type: number, required:true},
    },
        {timestamps: true}
)
        
        module.exports=mongoose.model("Designer", DesignerSchema)