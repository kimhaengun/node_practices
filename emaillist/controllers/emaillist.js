
const model = require('../models/emaillist');
module.exports = {
    index: async function(req, res){
        const results = await model.findAll();
        console.log(results);

        res.render('index',{
            list :results || []    //없을 수 있으니 빈배열로 에러 안뜨게
        });
    },
    form:function(req,res){
        res.render('form');
    },
    add:async function(req,res){
        console.log(req.body);
        const results = await model.insert(req.body);
        res.redirect("/");
    }
}