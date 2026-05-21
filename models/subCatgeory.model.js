const mongoose = require('mongoose');

const subCategory = mongoose.Schema({
    title:{
        type:String,
        required:[true,"title is required0"]
    },
    categoryid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:[true,"category is required"]
    },
    isActive:{
        type:Boolean,
        default:true
    },
    isDeleted:{
        type:Boolean,
        default:false,
    }
})

module.exports = mongoose.model("subCategory" ,subCategory)