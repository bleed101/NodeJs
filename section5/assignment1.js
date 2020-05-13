const express=require('express')
const app=express();
// app.use('/',(req,res,next)=>{
//     console.log("<h1>very first page!</h1>");
//     next();//we cannot use next after res.send();
// });
app.use('/users',(req,res,next)=>{
    res.send('<h1>Users!</h1>');

});
app.use('/',(req,res,next)=>{
    res.send("<h1>very sc page!</h1>");
});

app.listen(3000)