const errorRouter = require('./error');
const applicationRouter = {
    setup: function(application){

        // const site = models.Sitr.findOne();
        application
            .all('*', function(req,res,next){
                 res.locals.req = req;
                 res.locals.res = res;
                next(); //그래야 다음 route handler mapping 으로 넘어감 / intercepter (인증에 주로 사용)
            })
    
                .use("/",require('./main'))
                .use("/user",require('./user'))
                .use('/guestbook', require('./guestbook'))
                .use('/api/guestbook', require('./guestbook-api'))
                .use('/gallery',require('./gallery'))
                
                .use(errorRouter.error404)
                .use(errorRouter.error500)
                .siteTitle = 'MySite';
    }
}

//import 시키는 과정
module.exports={
    applicationRouter
}