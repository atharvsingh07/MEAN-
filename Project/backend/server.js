import mongoose from 'mongoose'
import express from 'express'
import cors from 'cors'
import { connectDB } from './database/index.js'
import { route } from './routes/note.router.js'

const app= express()
app.use(cors())
app.use(express.json())

connectDB()
app.use('/api/notes',route)

app.listen(4000,()=>
{
    console.log("server is running on http://localhost:4000")
})
