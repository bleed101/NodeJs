const express=require('express');
const router=express.Router();
const path=require('path');
const adminData=require('./admin');

router.get('/',(req,res,next)=>{
    const products=adminData.products
    res.render('shop',{prods:products,docTitle:'Shop',path:'/'});
    //you can pass more than one key value pair so as to acces them in pug file(dynamically).
});
module.exports=router;