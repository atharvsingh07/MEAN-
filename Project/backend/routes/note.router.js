import { Router } from "express";
import { addNotes,getNotes,updateNotes } from "../controller/note.controller.js";

const route=Router()

route.post('/',addNotes)
route.get('/',getNotes)
route.put('/:id',updateNotes)

export{route}