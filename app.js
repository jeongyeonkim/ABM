var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bodyParser = require('body-parser');

var router = express.Router();

var indexRouter = require('./routes/index');
var memberRouter = require('./routes/users');
// var commentRouter = require('./routes/comments');
// var feed_tagRouter= require('./routes/feed_tag');
// var feedRouter = require('./routes/feed');
// var group_memberRouter = require('./routes/group_member');
// var groupRouter = require('./routes/group');
// var groups_tag = require('./routes/groups_tag');
// var store = require('./routes/store');
// var tag = require('./routes/tag');

var sequelize = require('./models').sequelize;
var app = express();
sequelize.sync();

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');//
app.set('port', process.env.PORT || 4500);

// app.get('/', function(req, res){
//     res.send('hello world');
// });

app.use(bodyParser.json());

router.get('/', function(req, res) {
  res.send('Birds home page');
});

app.use(indexRouter);

// Only works on 3000 regardless of what I set environment port to or how I set
// [value] in app.set('port', [value]).
// app.listen(3000);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);
//app.use('/member', memberRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(app.get('port'));
module.exports = app;
