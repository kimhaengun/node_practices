const express = require('express');
const router = express.Router();

//컨트롤러 시작 route 주소는 / 뒤에 올 주소 내용
router.route("/01").get(function(req,res){
    res.render('hello/01'); //return 역할?? = ejs render    

});

//컨트롤러 시작 route 주소는 / 뒤에 올 주소 내용
router.route("/02").get(function(req,res){
    const data = {
      no:req.query.no || '',
      email:req.query.email || ''
    };
    res.render('hello/02',data); //return 역할?? = ejs render    

});

module.exports = router;