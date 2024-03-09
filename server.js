const express = require("express")
const app = express();


app.get("/api/get",(req,res)=>{
    res.send({message:"hello back to node js"})
})

app.listen(8000,()=>{
    console.log("Server started running on 8000 port")
})