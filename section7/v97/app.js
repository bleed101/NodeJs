const express=require('express');
const app=express();
const path=require('path');
const adminRoutes=require('./routes/admin');
const shop=require('./routes/shop');
const body=require('body-parser');

const errorController=require('./controllers/error');

app.set('view engine','ejs');
app.set('views','views');
app.use(body.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shop);
app.use(errorController.get404);
app.listen(3000);
