const express=require('express');
const app=express();
const port=process.env.PORT||5000;

const product_routes=require('./routes/product')

app.get('/',(req,res)=>{
    res.send("hello from backend..");
})
app.use('/api/products',product_routes)

app.listen(port,()=>{
    console.log("Server Satrted!!");
})