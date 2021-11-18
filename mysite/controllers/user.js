const models = require('../models');

module.exports={
    join: function(req, res){
       res.render('user/join');
    },
    joinsucess: function(req, res){

        res.render('user/joinsuccess');
     },
    _join:async function(req,res){
        console.log(req.body);
        try{
        await models.User.create({
            name:req.body.name,
            email:req.body.email,
            password:req.body.password,
            gender:req.body.gender
        });

        res.redirect('/user/joinsuccess');

        }catch(e){
            next(e);
        } 
    },
    login: function(req, res){
        res.render('user/login');
     },
     _login:async function(req,res){
        console.log(req.body);
        try{
        const user = await models.User.findOne({
            attributes: ['no','name','role'],
            where:{
                email: req.body.email,
                password: req.body.password
            }
        });
        //로그인 실패
        if(user == null){
            res.render('user/login', Object.assign(req.body, {result:'fail'}));
            return;    
        }

        console.log('세션처리!!!!!!!');
        req.session.authUser = user;

        res.redirect('/');

        }catch(e){
            next(e);
        } 
    },
    logout:async function(req,res,next){
        try{
            await req.session.destroy();
            res.redirect('/');
        }catch(e){
            next();
        }
    }
}