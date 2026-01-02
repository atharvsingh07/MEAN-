import { addStudent,getStudent,updateStudent,deleteStudent } from "../controller/student.controller.js";
import {Router} from 'express'

const route=Router();

route.post('/',addStudent);
route.get('/',getStudent);
route.put('/:id',updateStudent);
route.delete('/:id',deleteStudent);

export {route}