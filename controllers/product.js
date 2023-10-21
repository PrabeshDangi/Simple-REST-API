const Product=require('../models/productModel');

exports.getAllProducts=async(req,res)=>{
    try{
        const {company,name,sort}=req.query;
        const queryObject={}

        if(company){
            queryObject.company={$regex:company,$options:'i'};
        }

        if(name){
            queryObject.name={$regex:name,$options:'i'};
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
        const {company,name,sort}=req.query;
        const queryObject={}
        let apiData=Product.find(queryObject);
        console.log(apiData)

        if(sort){
            const sortFixed=sort.replace(","," ")
            apiData=apiData.sort(sortFixed)
        }
        console.log(apiData)

        const allProducts=await apiData;
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