var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const newRegistersRouter = require('./routes/newRegisters')
const newAreaOfInterestRouter = require('./routes/newAreaOfInterest');

const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
var urlToCreate = "mongodb://localhost:27017/<SiurMochot>DB";
var url = "mongodb://localhost:27017/";
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
app.get("/users/login",()=>{console.log("login");})
app.use('/users', usersRouter);
app.use('/newRegisters', newRegistersRouter);
app.use('/newAreaOfInterest', newAreaOfInterestRouter )


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
