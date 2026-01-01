import {Notes} from '../model/note.model.js'
import mongoose from 'mongoose'

const addNotes=async(req,res)=>// post ke liyee
{
    try {
        console.log("BODY:", req.body);
        const note = await Notes.create(req.body)
        res.status(201).json({
  message: "Note created successfully",
  note: note
});
     
    } catch (error) {
        res.status(500).json(error.message)
    }


}

const getNotes=async(req,res)=>// get ke liyee
{
    try {
        const note = await Notes.find()
        res.status(200).json(note)
        
    } catch (error) {
        res.status(500).json({message:" Internal server error hai "})
    }

}

const updateNotes=async(req,res)=>
{
    try {
        const note=await Notes.findOneAndUpdate(req.params.id ,req.body,{new:true})
        res.status(200).json({
            message:"Updated",
            note:note
        })
        
    } catch (error) {

        res.status(500).json({message:"Error"})
    }

}

export{addNotes,getNotes,updateNotes}