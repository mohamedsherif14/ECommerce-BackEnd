const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true , "name is required "]
    },
    email:{
        type:String,
        unique:true,
        required:[true , "email is required "]
    },
    password:{
        type:String,
        required:[true , "password is required "]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    }
},{
    timestamps:true
});

userSchema.pre('save' , async  function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password,12);
    }
})

userSchema.methods.correctPassword = async  function(inputPassword){
    return await bcrypt.compare(inputPassword, this.password);
}

module.exports = mongoose.model('User' , userSchema)

