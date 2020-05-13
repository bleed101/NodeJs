const http=require('http');
const express=require('express');//importing express pakage.
const app=express();//express application.
app.use((req,res,next)=>{
console.log("In the Middleware");
next();//jump to next middleware and print "In the another middleware."
});
app.use((req,res,next)=>{
    console.log("In the another Middleware");
    });
const server=http.createServer(app).listen(3000);