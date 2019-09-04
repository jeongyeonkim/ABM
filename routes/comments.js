var express = require('express');
var { Member, Comment } = require('../models');

var router = express.Router();

router.get('/:id', function(req, res, next) {
  Comment.findAll({
    include: {
      model: Member,
      where: { id: req.params.id },
    },
  })
    .then((comments) => {
      console.log(comments);
      res.json(comments);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.post('/', function(req, res, next) {
  Comment.create({
    email: req.body.id,
    feeds_no: req.body.feeds_no,
    group_no: req.body.group_no,
    p_id: req.body.p_id,
    comment: req.body.comment,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at,
    
  })
    .then((result) => {
      console.log(result);
      res.status(201).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.patch('/:id', function(req, res, next) {
  Comment.update({ comment: req.body.comment }, { where: { id: req.params.id } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

router.delete('/:id', function(req, res, next) {
  Comment.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
