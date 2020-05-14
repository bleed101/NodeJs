const express=require('express')
const app=express();
const bodyp=require('body-parser');
app.use(bodyp.urlencoded({extended:false}));//this only parse normal text not files.
app.use('/add-name',(req,res,next)=>{
    res.send('<form action="/name1" method="POST"><input type="text" name="name1"><button type="submit" >send</button></form>');
});
app.use('/name1',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');//redirect to passed url.
});
app.use('/',(req,res,next)=>{
    res.send('<h1>Sbmit ur name...</h1>');
});
app.listen(3000);