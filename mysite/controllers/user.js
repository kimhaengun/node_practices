module.exports={
    join: function(req, res){
        res.local.applicationName = '...';
        res.render('user/join');
    }
}