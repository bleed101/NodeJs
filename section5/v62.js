const express=require('express');
const app=express();
app.use((req,res,next)=>{
    res.send('<h1>Hey mini!</h1>')
});
app.listen(3000);//don't need to createserver using that long method. 