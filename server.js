import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
//config env
dotenv.config(); 

//database config 
connectDB();
//rest object
const app  = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

app.get('/',(req,res) => {
    res.send({
        message: 'welcome'
    })
})

const PORT = process.env.PORT || 8080;


app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`);
});