const http=require('http');
const fs=require('fs');
const s=http.createServer(
    (req,res)=>{
        if(req.url==='/')
        {
            res.write('<html>');
            res.write('<form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Send</form>')
            res.write('</html>');
            return res.end();
        }
        if(req.url==='/message'&&req.method==='POST')
        {
            const body=[];
            req.on('data',(chunk)=>{
                body.push(chunk);
            });
            return req.on('end',()=>{
                const parseBody=Buffer.concat(body).toString();
                const message=parseBody.split('=')[1];
                fs.writeFile('s.txt',message,(err)=>{
                    res.writeHead(302,{'Location':'/message'});
                    return res.end();  
                });
                // res.writeHead(302,{'Location':'/message'});
                // return res.end(); 
            });
        }
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<h1>we have you</h1>');
        res.write('</html>');
        res.end();
    }
).listen(3000);