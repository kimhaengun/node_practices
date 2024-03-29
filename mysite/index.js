const http = require('http');
//자바 String 처럼 임포트 설정 필요 없이 사용가능.
const path = require('path');
const express = require('express');
//세션
const session = require('express-session');
//환경 설정
const dotenv = require('dotenv');
const multer = require('multer');
//-----------------------------------------------

//1.Enviroment Variables
dotenv.config({
    path: path.join(__dirname,'config/app.env')
});
dotenv.config({
    path: path.join(__dirname,'config/db.env')
});

//2.Application Routers
const {applicationRouter} = require('./routes') //디렉토리명만 적어주면 자동으로 index.js로 들어감
const {SIGTERM} = require('constants')

//3.Logger
const logger = require('./logging');


//4.Application Setup / 미들웨어 막기
const application = express()
    //4-1.Session Environment
    .use(session({
        secret: "mysite-session",
        resave: false
    }))
    //4-2.reqest body parser  / body 데이터 형식
    .use(express.urlencoded({extended: true})) //extended : true --> application/x-www-form-urlencoded 형식
    .use(express.json()) //json으로 넘오는 데이터 형식을 body에 application/json

    //4-3 Multipart
    .use(multer({
        dest: path.join(__dirname, process.env.MULTER_TEMPORARY_STORE)
    }).single('file'))

    //4-4.static resources
    //__dirname --> index가 시작하는 위치
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))

    //4-5.view engine setup
    .set('views',path.join(__dirname,'views'))
    .set('view engine','ejs')

    //5. application Router Setup
    applicationRouter.setup(application);
    // .use("/",mainRouter)
    // .use("/user",userRouter);

    //Server Setup
http.createServer(application)
    .on('listening', function(){
        logger.info(`http server runs on ${process.env.PORT}`);
    })
    //에러 났을 경우
    .on('error', function(error){
        switch(error.code){
            case 'EACCESS':
                logger.error(`${process.env.PORT} requires privileges `);
                // 1 --> 비정상 종료 / 0 --> 정상 종료
                process.exit(1);
                break;
            case 'EADDRINUSE':
                logger.error(`${process.env.PORT} 이미 사용중 입니다. `);
                // 1 --> 비정상 종료 / 0 --> 정상 종료
                process.exit(1);
                break;
            default :
                throw error;
        }
    })
    //server setup
    .listen(process.env.PORT);
