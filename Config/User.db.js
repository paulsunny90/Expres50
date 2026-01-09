import mongoose from "mongoose";

const coonectDb=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/expres_50")
        console.log("connect Db")
        
        
    } catch (error) {
        console.log(error);
        
    }
}
export default coonectDb