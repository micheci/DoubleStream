const express=require("express")
const app=express();
const cors=require('cors');
const mongoose=require("mongoose")
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");
const userRoutes=require('./routes/user')

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//use .env filee in config
require("dotenv").config({ path: "./config/.env" });
//Connect To Database
connectDB();


app.use("/",mainRoutes);
// app.use("/posts",postRoutes);
app.use("/user",userRoutes);


app.listen(3001,function(){
    console.log("server is running")
})