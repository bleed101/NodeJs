const fun=(req,res)=>{
    if(req.url==='/')
    {
        res.write('<html>')
        res.write('<h1>lets\'s enter...</h1><hr>')
        res.write('<form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Send</form>')
        res.write('</html>')
        return res.end();
    }
    if(req.url==='/users')
    {
        res.write('<html>')
        res.write('<h1>Unorder list</h1><hr>')
        res.write('<ul><li>Good</li><li>Better</li><li>Best</li></ul>');
        res.write('</html>')
        return res.end();
    }
    if(req.url==='/create-user'&&req.method==='POST')
    {
        const usr=[];
        req.on('data',(chunk)=>{
            usr.push(chunk);
        });
        req.on('end',()=>{
            const getUser=Buffer.concat(usr).toString();
            console.log(getUser.split('=')[1]);

        })
        res.writeHead(302,{'Location':'/create-user'});
        return res.end();
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<h1>See your console!</h1><hr>')
    res.write('</html>')
    res.end();
};
module.exports=fun;