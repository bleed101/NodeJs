const express=require('express');
const path=require('path');
const dir=require('../util/path');
const router=express.Router();
router.get('/add-product',(req,res,next)=>{
    // res.send('<form action="/product" method="POST"><input type="text" name="item"><button type="submit">send</button></form>')
    // res.sendFile(path.join(__dirname,'..','views','product.html'));
    res.sendFile(path.join(dir,'views','product.html'));

});
router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
module.exports=router;