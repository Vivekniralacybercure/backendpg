const User = require("../Models/UserModel");


const handleGetAllUser = async(req , res) => {
    const allUser = await User.find({});
    return res.json(allUser);
}

const getUserById = async(req , res) => {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error : "user not found"});
    return res.json(user);
}

const editUserById = async(req , res) => {
    await User.findByIdAndUpdate(req.params.id , {lastName : "Nirala"});
    return res.json({status : success});
}

const deleteUserById = async (req , res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "success"});
} 

const createUser = async(req , res) => {
    const body = req.body;
    if( !body || !body.firstName || !body.lastName || !body.email){
        return res.status(400).json({msg : "all field are required"});
    }

    const result = await UserActivation.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email
    }); 

    return res.status(201).json({msg : "success"});
}

module.exports = {
    handleGetAllUser , 
    getUserById, 
    editUserById,
    deleteUserById,
    createUser,
}