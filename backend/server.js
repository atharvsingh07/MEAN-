import express from 'express'
import { connectDB } from './databse/index.js'
import cors from 'cors'
import prodroute from './router/product.router.js'

const app=express()
app.use(cors())
app.use(express.json())
const PORT=8000

app.use('/api/product',prodroute)
connectDB()

app.listen(PORT,()=>
{
    console.log(`server is running on http://localhost:${PORT}`)
})