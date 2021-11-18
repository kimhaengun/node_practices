module.exports={
    join: function(req, res){
       res.render('user/join');
    },
    joinsucess: function(req, res){

        res.render('user/joinsucess');
     },
    _join:function(req,res){
        console.log(req.body);
        res.redirect('/user/joinsuccess')
    }
}