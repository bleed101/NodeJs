const http=require('http');
const routs=require('./routes');
const server=http.createServer(routs).listen(3000);