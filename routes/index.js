var express = require('express');
var router = express.Router();
var Member = require('../models').Member;
var usersRouter = require('./users');
/* GET home page. */
router.get('/members', function(req, res, next) {
  Member.findAll()
  .then((Member)=>{
    // res.render('sequelize',{Member});
    res.send(Member);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

router.post('/members',function(req, res, next){
  Member.create({
    email: req.body.email,
    password: req.body.password,
    animal_id:req.body.animal_id,
    name: req.body.name,
    nickname : req.body.nickname,
    carrier: req.body.carrier,
    telephone: req.body.telephone,
    image_path: req.body.image_path,
    introduce: req.body.introduce,
    created_at: req.body.created_at,
  })
  .then(()=>{
    res.send(true);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});

// router.use('/members', usersRouter);

module.exports = router;
