const Product=require('../models/productModel');

exports.getAllProducts=async(req,res)=>{
    try{
        const {company,name,featured}=req.query;
        const queryObject={}
        let apiData=Product.find(queryObject);

        if(company){
            queryObject.company={$regex:company,$options:'i'};
        }

        if(name){
            queryObject.name={$regex:name,$options:'i'};
        }
        if(featured){
            queryObject.featured=featured;
        }
        
        let page=Number(req.query.page)||1;
        let limit=Number(req.query.limit)||3;
        let skip=(page-1)*limit;
       

    const allProducts=await Product.find(queryObject).skip(skip).limit(limit);
    res.status(200).json({
        Number:allProducts.length,
        status:"Success",
        data:allProducts
    })
    //console.log(queryObject)
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
        const {company,name,sort,select}=req.query;
        const queryObject={}
        let apiData=Product.find(queryObject);
        
        if(sort){
            //const sortFixed=sort.replace(","," ") this will replace the first occurence of ',' so if the statement has more than one comma then it can't be handled with this method.
            const sortFixedFixed=sort.split(",").join(" ");
            apiData=apiData.sort(sortFixed)
        }
        if(select)
        {
            const selectFixed=select.replace(/,/g," ")//This /g is global flag that replaces all the occurence of the ','
            //const selectFixed=select.split(",").join(" ");
            apiData=apiData.select(selectFixed);
        }

        
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