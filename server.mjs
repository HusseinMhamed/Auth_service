import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/dbconnect.mjs';
import mongoose from 'mongoose';
import corsOptions from './config/corsOptions.mjs';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000

connectDB();

app.use(
    cors(corsOptions)
)


mongoose.connection.once("open",()=>{
    console.log("connected to database");
    app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    })
});

mongoose.connection.on("error",()=>{
    console.log("erre")
})
