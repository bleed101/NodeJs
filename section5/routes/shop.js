const path=require('path');
const express=require('express');
const dir=require('../util/path');
const router=express.Router();
router.get('/',(req,res,netx)=>{
    // res.send('<h1>Router Shop...</h1>')
    // res.sendFile('/views/shop.html');//this will not work we need to use join.
    // res.sendFile(path.join(__dirname,'../','views','shop.html'));//this will convert to url int linux as well as win.
    res.sendFile(path.join(dir,'views','shop.html'));//this will convert to url int linux as well as win.

})
module.exports=router;