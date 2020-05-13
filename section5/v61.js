const http=require('http');
const express=require('express');
const app=express();
app.use((req,res,next)=>{
    res.send('<h1>Hello express</h1>')//send() automatically set header to 'Content-Type','text/html'.
})
const server=http.createServer(app).listen(3000);