const express = require('express');
const router = express.Router();

//컨트롤러 시작 route 주소는 / 뒤에 올 주소 내용
router.route("").get(function(req,res){
    res.render('main/index'); //return 역할?? = ejs render    

});

module.exports = router;