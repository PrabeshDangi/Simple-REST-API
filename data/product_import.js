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
        await Product.deleteMany();//this will delete all the previous data in the DB and then create new ones which will look something like overwriting the data in the DB..
        await Product.create(movies);
        console.log("movies imported in database and document created!!")
    }
    catch(err){
        console.log(err.message);
    }
    process.exit();
}

importMovies();