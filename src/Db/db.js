import mongoose from 'mongoose';

export const connectdb = async()=>{
    try{
       let connectdata = await mongoose.connect(`${process.env.MONGODB_URL}`);  
       if(connectdata){
         console.log("database successfully connected")
       }
    }catch(err){
        console.log(err);
    }
}