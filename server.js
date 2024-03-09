const express = require("express")
const app = express();
require("dotenv").config


app.get("/api/get",(req,res)=>{
    res.send({message:"hello back to node js"})
})

app.get("/api/get_user",(req,res)=>{
    res.send({
        user:{
            name:"asiff",
            age:22,
            contact:1234
        },
        env:process.env.NAME
    })
    
})

app.get("/api/admin",(req,res)=>{
    res.send("i am the Admin working")
})


app.listen(process.env.PORT,()=>{
    console.log("Server started running on 8000 port")
})