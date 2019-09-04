var express = require('express');
var router = express.Router();
var Member = require('../models').Member;

/* GET home page. */
router.get('/', function(req, res, next) {
  Memver.findAll()
  .then((users)=>{
    res.render('sequelize',{members});
  })
  .catch((err)=>{
    console.error(err);
    next(err);
  });
  
});

module.exports = router;
