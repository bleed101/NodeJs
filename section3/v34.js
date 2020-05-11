const http=require('http');
const fs=require('fs');
const s=http.createServer(
    (req,res)=>{
        if(req.url==='/')
        {
            res.write('<html>');
            res.write('<form action="/message" method="POST"><input type="text" name="message" ><button type="submit">Send</form>')
            res.write('</html>')
            return res.end();
        }
        if(req.url==='/message'&&req.method==='POST')
        {
            const body=[];
            req.on('data',(chunk)=>{
                console.log(chunk);
                body.push(chunk);
            });// allow us to listen to certain event.
            req.on('end',()=>{//reeads data till last.
                const parseBody=Buffer.concat(body).toString();
                const message=parseBody.split('=')[1];//[1] means it gonna display second element of the pair.
                // console.log(parseBody);
                fs.writeFileSync('saved.txt',message);
            });
            // fs.writeFileSync('saved.txt','saved');
            res.writeHead(302,{'Location':'/message'});//this code executed after fs.writeFileSync().
            return res.end();
        }
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<h1>we saved your response!</h1>')
        res.write('</html>');
        res.end();
    }
);
s.listen(3000);