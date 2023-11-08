const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({
    title:{type:String,require:true},
    author:{type:String,require:true},
    summary:{type:String,require:true}
},{
    versionKey:false
})

const BookModel = mongoose.model("Book",BookSchema)

module.exports={BookModel}