import mongoose from 'mongoose'

const noteSchema=mongoose.Schema({

    user:
    {
        type:String,
        required:true
        
    },
    note:
    {
        type:String,
        required:true

    }
},{timestamps:true})

export const Notes=mongoose.model("Notes",noteSchema)