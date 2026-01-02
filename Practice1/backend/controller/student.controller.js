import {User} from '../model/user.model.js'

const addStudent=async(req,res)=>
{
    try {
        const user=await User.create(req.body)
        res.status(201).json(user)
        
    } catch (error) {
        res.status(500).json({message:"Server error"})
    }
}//add ke liye

const getStudent=async(req,res)=>
{
    try {
        const user=await User.find();
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:"xyz"})
    }
}
const updateStudent=async(req,res)=>
{
    try {
        const user=await User.findById(req.params.id,req.body,{new:true})

        if(!user)
        {
            res.status(404).json({message:"Student details IS REQ"})
        }
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:"Server error hai bhai"})
    }
}

const deleteStudent=async(req,res)=>
{
    try {
        const user=await User.findByIdAndDelete(req.params.id)

        if(!user)
        {
            res.status(404).json({message:"Student details IS REQ"})
        }
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json({message:"Server error hai bhai"})
    }
}

export{addStudent,getStudent,updateStudent,deleteStudent}