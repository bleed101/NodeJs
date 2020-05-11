const http=require('http');
const s=http.createServer((req,res)=>{

    if(req.url==='/')
        {
            res.setHeader('Content-Type','text/html');
            res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form>');
            return res.end();
        }
    
        res.setHeader('Content-Type','text/html');
        res.write('<h1>we have your response</h1>');
        res.end();
    }
);
s.listen(3000);