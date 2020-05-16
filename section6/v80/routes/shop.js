const express=require('express');
const router=express.Router();
const path=require('path');
const adminData=require('./admin');

router.get('/',(req,res,next)=>{
    res.render('shop');
});
module.exports=router;