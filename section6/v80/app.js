const express=require('express');
const app=express();
const path=require('path');
const adminData=require('./routes/admin');
const shop=require('./routes/shop');
const body=require('body-parser');

app.set('view engine','pug');
app.set('views','views');
app.use(body.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shop);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});
app.listen(3000);
