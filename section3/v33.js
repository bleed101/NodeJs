const http=require('http');
const fs=require('fs');//we created this variable before also.
const s=http.createServer((req,res)=>{//http.create.. is sub function which creates server.
if(req.url==='/')//strictly comparing url with '/'.
{
    res.write('<html>');//res.write: response.write helps to display html page.
    //NOTE: some time not writing html also work but if u remove html here you'll not be able to see the content.   
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">SEND</button></form></body>');
    res.write('</html>');
    return res.end();//retrun helps you exiting the page of current response and res.end() end's the process. 
}
if(req.url==='/message'&&req.method==='POST')
{
    fs.writeFileSync('message.txt','responses')//there is difference b/w writeFileSync and writeFile
    res.statusCode=302;//you can also do this : res.writeHead(302,{'Location':'/message'}); and remove the next line.
    res.setHeader('Location','/message');//header is node provided which is 'Location' and set is to '/message', or u can direct to elsewhere.
    return res.end();
}
res.setHeader('Content-Type','text/html');//this is a important part coz it gonna display ur web page. 
res.write('<h1>Thank\'s for  your response</h1>')
res.end();
});
s.listen(3000);//this gonna host ur server to 3000 u can set it to any but preferd is 3000.
