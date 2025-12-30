import mongoose from "mongoose";

const productSchema=mongoose.Schema({
    productCode:
    {
        type:Number,
        index:true,
        required:true
    },
    productName:
    {
        type:String,
        required:true  
    },
    category:
    {
        type:String,
        required:true
    },
    price:
    {
        type:Number,
        required:true
    },


},{timestamps:true})

export const Product=mongoose.model("Product",productSchema)