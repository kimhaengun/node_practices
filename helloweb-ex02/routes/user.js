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

router.route("/api").get(function(req, res){
  const vo={
    no:10,
    name:'뚤리',
    email:'dooly@naver.com',
    gender:'male'
  };

  // res.writeHead(200,{
  //   'Content-Type' : 'application/json'
  // });
  // res.end(JSON.stringify(vo));
  //  =
  res.send(vo); //send() 안에 객체를 보내면됨.
});


module.exports = router;