import User from '../models/User.mjs'
const getAllUsers = async(req,res)=>{
    const users = await User.find().select("-password").lean();
    if(!users.length){
        return res.status(400).json({message:"no users found"})
    }
    res.json(users);
}

export default getAllUsers;