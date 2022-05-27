const express = require('express');
// require('dotenv').config({path : '/.env'})
require('dotenv').config({path : require('find-config')('.env')})

// requiring database connection
require("./db/db");
var cors = require('cors')
 
// connectToMongo();
const app = express()
const port = 5000;

app.use(cors())
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.listen(port,()=>{
    console.log("connected to port 5000");
}) 