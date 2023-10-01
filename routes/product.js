const express=require('express');
const router=express.Router();
const routes=require('../controllers/product')

router.route('/').get(routes.getAllProducts);
router.route('/testing').get(routes.getTestingProducts);

module.exports=router;
