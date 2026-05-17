const User = require('../models/User.model');


const addUser = (role)=>{
    return async (req,res)=>{
        const{name,email,password} = req.body;
        const myUser = await User.create({name,email,role,passwrod});
        res.status(201).json({msg:'user add' , data:myUser});
    };
};


const getUsers = async (req,res) => {
    const myUsers = await User.find().select("-password");
    res.status(200).json({msg:'users list',data:myUsers});
};