var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const indexRouter = require('./mongoRoutes/index');
const usersRouter = require('./mongoRoutes/users');
const newRegistersRouter = require('./mongoRoutes/newRegisters')
const areaOfInterestRouter = require('./mongoRoutes/areaOfInterest')
const reportingRouter = require('./mongoRoutes/reporting')
const coursesRouter = require('./mongoRoutes/courseDetails');
const modelRouter=require('./mongoRoutes/modelDetails')
const editStatusRouter=require('./mongoRoutes/editStatus')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient;
var urlToCreate = "mongodb://localhost:27017/<SiurMochot>DB";
var url = "mongodb://localhost:27017/";


const mongoosedb=require('./mongooseDB');

var app = express();
mongoosedb._connect();


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
app.use('/newRegister', newRegistersRouter)
app.use('/areaOfInterest', areaOfInterestRouter)
app.use('/reporting', reportingRouter);
app.use('/courseDetails', coursesRouter);
app.use('/modelDetails', modelRouter);
app.use('/editStatus', editStatusRouter);
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
