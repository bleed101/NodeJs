const express=require('express');
const path=require('path');
const app=express();
const admind=require('./routes/admin');
const shop=require('./routes/shop');
const body=require('body-parser');

// app.set('view engine','ejs');
// app.set('views','views');

app.use(body.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

// app.use('/admin',admin);
app.use(shop);
app.use((req,res,next)=>{
    res.status(404).render('404',{pageTitle:'page not found',path:''});
})

app.listen(3000);
