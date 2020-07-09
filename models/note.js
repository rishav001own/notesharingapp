const mongoose = require ('mongoose');
const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    postedby:{
        type:String,
        required:true
    }
},{timestamps:true})

mongoose.model("Note",noteSchema);