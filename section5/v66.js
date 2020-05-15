const express=require('express');
const app=express();
const path=require('path');

const adminR=require('./routes/admin'); 
const shop=require('./routes/shop');

const bodyp=require('body-parser');
app.use(bodyp.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminR);
app.use(shop);
app.use((req,res,next)=>{

    res.status(404).sendFile(path.join(__dirname,'views','p404.html'));
});
app.listen(3000);