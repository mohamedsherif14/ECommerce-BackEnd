const jwt = require('jsonwebtoken')
const user = require('../models/User.model')
const catchAsync = require('../utilites/catchAsync.util')

const authentication = catchAsync(
    async (req , res , next)=>{
        const authHeader = req.headers.authorization
        if(!authHeader?.startsWith("Bearer ")){
            return  res.status(401).json({msg:"error" , err:"unauthorized , no token provided"})
        }
        const token = authHeader.split(" ")[1]
        const decode = jwt.verify(token,process.env.SECRET_KEY);
        const myuser = await user.findById(decode.id).select("-password");
        if(!myuser){
            return res.status(401).json({msg:"error" , err:"unauthorized"}) 
        }
        req.user = myuser
        next();
    }
) 

module.exports = authentication