const express=require('express');
const router=express.Router();
const path=require('path');
const products=[];

router.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'));
});
router.post('/add-product',(req,res,next)=>{
    products.push({title:req.body.title});
    res.redirect('/');
});
exports.routes=router;
exports.products=products;