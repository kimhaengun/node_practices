
const model = require('../models/emaillist');
module.exports = {
    index: async function(req, res){
        const results = await model.findAll();
        console.log(results);

        res.render('index',{
            list :results || []    //없을 수 있으니 빈배열로 에러 안뜨게
        });
    }
}