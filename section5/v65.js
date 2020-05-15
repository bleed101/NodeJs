const express=require('express');
const app=express();
const bodyp=require('body-parser');
app.use(bodyp.urlencoded({extended:false}));
app.use('/form',(req,res,next)=>{
    res.send('<form action="/post" method="POST"><input type="text" name="name"><button type="submit">send</button></form>');
})
app.post('/post',(req,res,next)=>{//this app.post() will only trigger when it get post request.
    console.log(req.body);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send('<h1>Triggring Post request!</h1>');
});
app.listen(3000);
