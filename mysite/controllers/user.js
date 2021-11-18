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
            email:req.body.password,
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
     }
}