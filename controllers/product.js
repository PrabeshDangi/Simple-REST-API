const Product=require('../models/productModel');

exports.getAllProducts=async(req,res)=>{
    try{
        const {company}=req.query;
        const queryObject={}
        if(company){
            queryObject.company=company;
        }
    const allProducts=await Product.find(queryObject);
    res.status(200).json({
        Number:allProducts.length,
        status:"Success",
        data:allProducts
    })
    console.log(queryObject)
    }
    catch(err){
        res.status(400).json({
            status:"Fail",
            message:err.message
        })
    }
}


exports.getTestingProducts=async(req,res)=>{
    try{
        const allProducts=await Product.find({company:"Apple"});
        res.status(200).json({
            status:"Success",
            data:allProducts
        })
        }
        catch(err){
            res.status(400).json({
                status:"Fail",
                message:err.message
            })
        }
}