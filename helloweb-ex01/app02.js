const http = require('http');
const fs = require('fs');
const port = 8080;

const server =http.createServer(function(req,resp){
    console.log(req.url);

    if(req.url === '/'){
        req.url = '/index.html';
    }

    fs.readFile(`${__dirname}/public${req.url}`,function(error, data){ //콜백시 앞은 error, 뒤는 data 정해짐 바꾸려 들지마라.
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        resp.end(data);
    });
});

server.listen(port, function(){
    console.log(`http server running on ${port}`);
});