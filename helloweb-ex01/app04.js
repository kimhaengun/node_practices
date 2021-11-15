const connect = require('connect');
const serveStatic = require('serve-static');
const connetRoute = require('connect-route');

const port = '8080';
const app = connect();

app.use(connetRoute(function(router){
    
    router.get("/",function(req,resp){ //  / 주소 요청이 들어왔을 경우
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        resp.end('<h1>main</h1>');
    });

    router.get("/guestbook",function(req,resp){ // /guestbook 주소 요청이 들어왔을 경우
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        resp.end('<h1>guestbook</h1>');
    });

    router.get("/board",function(req,resp){ // /board 주소 요청이 들어왔을 경우
        resp.writeHead(200,{
            'Content-Type' : 'text/html'
        });
        resp.end('<h1>board</h1>');
    });

    router.get("/user",function(req,resp){ // /user 주소 요청이 들어왔을 경우

    });    
}));


app.use(serveStatic(__dirname+"/public"));
//실행
app.listen(port,function(){
    console.log(`http server 실행됨 ${port}`);
});