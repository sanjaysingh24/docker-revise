import { User } from "../models/usermodels.js";

export const createuser = async(req,res)=>{
   const{name,email} = req.body;
    try{
       let createuser = new User({
        name,email
       })
       await createuser.save();
       return res.status(200).json({message:"User created successfully",status:true})
    }catch(err){
        console.log(err)
    }
}

export const getuser = async(req,res)=>{
    try{
      let userdata = await User.find({});
      if(userdata.length==0){
        return res.status(200).json({message:"No user found",status:false,data:[]})
      }
      else{
        return res.status(200).json({message:"Data fetched Successfully",data:true,data:userdata})
      }
    }catch(err){
        console.log(err)
    }
}