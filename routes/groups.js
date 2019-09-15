var express = require('express');
var group = require('../models').Group;

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  Member.findAll()
  .then((members)=>{
    res.json(members);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
  
});

router.post('/',function(req, res, next){
  Member.create({
    email: req.body.email,
    animal_id:req.body.email_id,
    name: req.body.name,
    nickname : req.body.nickname,
    carrier: req.body.carrier,
    telephone: req.body.telephone,
    image_path: req.body.image_path,
    introduce: req.body.introduce,
    created_at: req.body.created_at,
  })
  .then((result)=>{
    console.log(result);
    res.status(201).json(result);
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
});
module.exports = router;


module.exports = router;
