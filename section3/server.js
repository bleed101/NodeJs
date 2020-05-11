const http=require('http');
const routes=require('./routes');
const s=http.createServer(routes).listen(3000);