// const http=require('http');
// function rqListener(req,res) {

// }
// http.createServer(rqListener);
// const http=require('http');
// const s=http.createServer(function(req,res){
//     console.log(req);
// });
// s.listen(3000);
// const http=require('http');
// http.createServer((req,res)=>{

// });

const http=require('http');
const s=http.createServer(function(req,res){
    console.log(req.url,req.method,req.headers);
});
s.listen(3000);