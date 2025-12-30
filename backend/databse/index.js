import mongoose from "mongoose";

const connectDB= async()=>
{
    try {
        await mongoose.connect("mongodb://localhost:27017/productDB");
        console.log("Database Connected")
        
    } catch (error) {
        console.error('error occoured while connecting database',error)
    }
}

export{connectDB}