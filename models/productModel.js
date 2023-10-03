const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name must be provided."]
        
    },
    price:{
        type:Number,
        required:[true,"Price must be included."]
    },
    featured:{
        type:Boolean,
       default:true
    },
    ratings:{
        type:Number,
        default:4.9
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        required:[true,"Company name must be included."],
        enum:{
            values:["Apple","Samsung","Redmi","OnePlus"],
            message:`{value} is not supported!!`
        }
    }
})
module.exports=mongoose.model("Product",productSchema)