import { Product } from "../model/product.model.js";

const createProduct=async(req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(201).json(product) 
    }
    catch(err)
    {
        res.status(400).json({
            message:err.message,
        })

    }
}

const getProduct=async(req,res)=>
{
    try {
        const product=await Product.find()
        res.status(200).json(product)
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
}

const getProductById=async(req,res)=>
{
    try {
        const product=await Product.findById(req.params.id)

        if(!product)
        {
            return res.status(400).json({message:"Product nahi milaa"})
        }
        res.status(201).json(product)
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const updateProduct=async(req,res)=>
{
    try
    {
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!product)
        {
            return res.status(400).json({message:"Product nahi milaa"})
        }
        res.status(201).json(product)

    }
    catch(err)
    {
        res.status(400).json({message:err.message})

    }

}

const deleteProduct=async(req,res)=>
{
    try {
        const product=await Product.findByIdAndDelete(req.params.id)
     if(!product)
        {
            return res.status(400).json({message:"Product nahi milaa"})
        }
        res.status(201).json({message:"product delete hogya"})
        
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
}
export{createProduct,getProduct,getProductById,updateProduct,deleteProduct}