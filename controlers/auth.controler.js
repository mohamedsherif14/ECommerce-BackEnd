const user = require('../models/User.model');
const jwt = require('jsonwebtoken')
const signToken = (user)=>{
    return jwt.sign(
        {id:user._id,role:user.role,name:user.name,email:user.email},
        process.env.SECRET_KEY,
        {expiresIn:process.env.JWT_EXPIRS_IN}
    )
    
    
}

const login = async (req,res)=>{
    const {email,password}= req.body
    const myUser = await user.findOne({email})
    if(myUser && myUser.correctPassword(password)){
        const token = signToken(myUser)
        return  res.status(200).json({message:'login successful', data:token})
    }
    res.status(401).json({message:'error', error:'invalid email or password'})
}

module.exports = {
    login
}