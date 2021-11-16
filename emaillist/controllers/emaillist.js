
const model = require('../models/emaillist');
module.exports = {
    index: function(req, res){
        const result = module.findAll();
        res.render('index',{
            list :result || []    //없을 수 있으니 빈배열로 에러 안뜨게
        });
    }
}