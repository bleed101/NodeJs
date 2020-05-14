const express=require('express');
const app=express();
app.use('/express',(req,res,next)=>{
    console.log('1st Middleware.');
    res.send('<h1>Express.js</h1>');
});
app.use('/',(req,res,next)=>{
    console.log('1st Middleware.');
    res.send('<h1>Adonis.js</h1>');
});
app.listen(3000);