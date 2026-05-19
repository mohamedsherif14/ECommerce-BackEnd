const User = require('../models/User.model');
const catchAsync = require('../utilites/catchAsync.util')


const addUser = (role)=>{
    return catchAsync(async (req,res)=>{
        const{name,email,password} = req.body;
        const myUser = await User.create({name,email,role,password});
        res.status(201).json({msg:'user add' , data:myUser});
    });
};


const getUsers = catchAsync( async (req,res) => {
    const myUsers = await User.find().select("-password");
    res.status(200).json({msg:'users list',data:myUsers});
});

module.exports = {
    addUser,
    getUsers
}