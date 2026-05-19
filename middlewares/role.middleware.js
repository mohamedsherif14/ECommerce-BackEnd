const catchAsync = require("../utilites/catchAsync.util");

const authorized = (...allowedRoles)=>{
    return catchAsync(
        async (req,res,next)=>{
            if(!allowedRoles.includes(req.user.role)){
                return res.status(403).json({msg:'error' , err:"access denied"})
            }
            next();
        }
)}

module.exports = authorized