const mainRouter = require('./routes/main');
const userRouter = require('./routes/user');

    //4-4.request router
    .all('*', function(req,res,next){
        res.locals.req = req;
        res.locals.res = res;
        next(); //그래야 다음 route handler mapping 으로 넘어감 / intercepter (인증에 주로 사용)
    });
    
.use("/",mainRouter)
.use("/user",userRouter);
