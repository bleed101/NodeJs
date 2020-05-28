const express=require('express');
const router=express.Router();
const path=require('path');
const products=[];
router.get('/',(req,res,next)=>{
    // res.render('shop',{prods:products,pageTitle:'shop',path:'/',hasProducts:products.length>0});
    res.sendFile(path.join(__dirname,'..','views','shop.html'));
});
module.exports=router;