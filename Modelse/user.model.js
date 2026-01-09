import mongoose, { Schema, Types } from "mongoose";

const userShema = new mongoose.Schema({
   name:{type:String,require:true},
   age:{type:String,min:1 ,require:true}


})

export default mongoose.model ("user",userShema);