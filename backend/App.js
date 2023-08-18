// import  express  from "express";
import express from "express"
import { QuizRoutes } from "./routes/QuizRoutes.js";
const app=express();
app.use('/',QuizRoutes) //using callback
const server=app.listen(1234,(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("server started",server.address().port);
    }
})