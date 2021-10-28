var express = require("express")
var bodyparser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.get("/",(req,res)=>{
    res.send("Hello From server")
}).listen(3000);
 
console.log("Listening on port 3000");