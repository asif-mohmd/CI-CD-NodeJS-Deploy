const express = require("express")
const app = express();


app.get("/api/get",(req,res)=>{
    res.send({message:"hello back to node js"})
})

app.get("/api/get_user",(req,res)=>{
    res.send({
        user:{
            name:"asif",
            age:22,
            contact:1234
        }
    })
})

app.get("/api/admin",(req,res)=>{
    res.send("i am the Admin")
})


app.listen(8000,()=>{
    console.log("Server started running on 8000 port")
})