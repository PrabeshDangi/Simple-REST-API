const mongoose=require("mongoose");
const dotenv=require("dotenv");
const app=require('./app');
const port=process.env.PORT||5000;
dotenv.config({path:'./config.env'})


mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((conn)=>{
    console.log("DB connection successful");
}).catch((err)=>{
    console.log(err.message);
})




app.listen(port,()=>{
    console.log("Server Satrted!!");
})