const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');

const errorController = require('./controllers/error');
// const User=require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use((req,res,next)=>{
//     User.findByPk('5eea59701bceb7405cca280f')
//     .then(user=>{
//         req.user=new User(user.name,user.email,user.cart,user._id);
//         next();
//     })
//     .catch(err=>console.log(err));
// });

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose.connect('your mongoDB atlas url').then(result=>{
    app.listen(3000);
})
.catch(err=>{
    console.log(err);
});