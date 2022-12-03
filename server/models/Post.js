const mongoose = require("mongoose");





const postSchema=mongoose.Schema({
    userName:String,
    
})

module.exports=mongoose.model("Post",postSchema)