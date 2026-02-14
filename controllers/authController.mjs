import User from "../models/User.mjs"
import bcrypt from 'bcrypt'
const register =  async (req,res)=>{
    const {first_name,last_name,email,password} = req.body;
    if(!first_name || !last_name || !email || password){
        return res.status(400).json({message:"please fill all fields"})
    }
    const foundUser = await User.findOne({ email:email }).exec();
    if(foundUser){
        return res.status(401).json({message:"User already exist"})
    }
   const hashedpassword = await bcrypt.hash(password,10);
   const user = await User.create({
    first_name,
    last_name,
    email,
    password: hashedpassword 
   })
   const accessTocken = jwt.sign({
    UserInfo:{
        id:user._id
    }
   })
}