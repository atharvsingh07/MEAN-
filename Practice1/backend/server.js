import express from 'express'
import cors from 'cors'
import { connectDb } from './database/index.js';
import { route } from './router/student.router.js';

const app=express();

app.use(cors())
app.use(express.json())
connectDb();
app.use('/api/student',route)

app.listen(3000,()=>
{
    console.log("SERVER CHAL RHAA 3000 PE")
})


