import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
//config env
dotenv.config(); 

//database config 
connectDB();
//rest object
const app  = express()

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use('/api/v1/auth', authRoutes);

app.get('/',(req,res) => {
    res.send({
        message: 'welcome'
    })
})

const PORT = process.env.PORT || 8080;


app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`);
});