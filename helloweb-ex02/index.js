const http = require('http');
//자바 String 처럼 임포트 설정 필요 없이 사용가능.
const path = require('path');
const express = require('express');
//-----------------------------------------------
const mainRouter = require('./routes/main');
const helloRouter = require('./routes/hello');
const userRouter = require('./routes/user');

const port = 8080;

//Application Setup / 미들웨어 막기
const application = express()

    //1.static resources
    //__dirname --> index가 시작하는 위치
    .use(express.static(path.join(__dirname, 'public')))

    //2.reqest body parser  / body 데이터 형식
    .use(express.urlencoded({extended: true})) //extended : true --> application/x-www-form-urlencoded 형식
    .use(express.json()) //json으로 넘오는 데이터 형식을 body에 application/json

    //3.view engine setup
    .set('views',path.join(__dirname,'views'))
    .set('view engine','ejs')

    //4.request router
    .all('*', function(req,res,next){
        res.locals.req = req;
        res.locals.res = res;
        next(); //그래야 다음 route handler mapping 으로 넘어감 / intercepter (인증에 주로 사용)
    })
    .use('/', mainRouter) //Router는 컨트롤러 함수에 연결시켜주는 역할
    .use('/hello', helloRouter)
    .use('/user',userRouter);

//Server Setup
http.createServer(application)
    .on('listening', function(){
        console.info(`http server runs on ${port}`);
    })
    //에러 났을 경우
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                console.error(`${port} requires privileges `);
                // 1 --> 비정상 종료 / 0 --> 정상 종료
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(`${port} 이미 사용중 입니다. `);
                // 1 --> 비정상 종료 / 0 --> 정상 종료
                process.exit(1);
                break;
            default :
                throw error;
        }
    })
    //server setup
    .listen(port);
