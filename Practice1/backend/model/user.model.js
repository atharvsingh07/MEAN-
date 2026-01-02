import mongoose from "mongoose";

const userSchema=mongoose.Schema({

    name:
    {
        type:String,
        required:true
    },
    rollno:
    {
        type:Number,
        required:true
    },
    course:
    {
        type:String,
        enum:["BCA","BBA","MBA","MCA"]
    },
})

export const User=mongoose.model("User",userSchema)