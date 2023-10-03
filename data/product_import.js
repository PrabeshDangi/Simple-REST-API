const mongoose=require("mongoose");
const dotenv=require('dotenv');
const fs=require('fs');
const movies=JSON.parse(fs.readFileSync('./productsDB.json'));
dotenv.config({path:'../config.env'});
const Product=require('../models/productModel')

//Database connection
mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then((conn)=>{
    console.log("DB connection successful!!")
}).catch((err)=>{
    console.log(err.message);
})

const importMovies=async ()=>{
    try{
        await Product.create(movies);
        console.log("movies imported in database and document created!!")
    }
    catch(err){
        console.log(err.message);
    }
    process.exit();
}

importMovies();