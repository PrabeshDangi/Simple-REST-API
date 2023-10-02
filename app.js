const express=require('express');
const app=express();
const product_routes=require('./routes/product')

// app.get('/',(req,res)=>{
//     res.send("hello from backend..");
// })

app.use('/api/products',product_routes)

module.exports=app;