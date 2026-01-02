import mongoose from 'mongoose'

const connectDb=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/productDB")  
        console.log("DB connected")      
    } catch (error) {
        console.error(error.message)
    }

}

export{connectDb}