const express = require('express');
const router = express.Router();

//컨트롤러 시작 route 주소는 / 뒤에 올 주소 내용
//user?no=10
router.route("").get(function(req,res){

    res.render('user/info',{
      no:req.query.no || 0      
    }); //return 역할?? = ejs render    
});

//컨트롤러 시작 route 주소는 / 뒤에 올 주소 내용
router.route("/info/:no").get(function(req, res){
  res.render('user/info', {
      no: req.params.no || 0
  });

});

router.route("/join").get(function(req, res){
  res.render('user/join');
});

router.route("/join").post(function(req, res){
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;