const connect = require('connect');
const serveStatic = require('serve-static');

const port = '8080';
const app = connect();

//serveStatic - mineType을 설정할 필요가없슴
app.use(serveStatic(__dirname+"/public"));

//실행
app.listen(port,function(){
    console.log(`http server 실행됨 ${port}`);
});