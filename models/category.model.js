const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
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

module.exports = mongoose.model('category' , categorySchema);