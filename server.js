import express from "express";
import dotenv from "dotenv";

//config env
dotenv.config(); 

//rest object
const app  = express()

app.get('/',(req,res) => {
    res.send({
        message: 'welcome'
    })
})

const PORT = 8080


app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`);
});