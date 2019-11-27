if (process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
require("./db");

var indexRouter = require('./routes/index');
var dataRouter = require('./routes/data');
var infoRouter = require('./routes/info');
var patients = require('./routes/patient');

var app = express();
app.options('*', cors())
const whitelist = [
  "http://localhost:8080",
  "http://localhost:8080/*",
  "http://localhost:5000",
  "http://localhost:*",
  '*:*',
  'undefined',
  '*'
]
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
      console.log('allowed ',origin);
    } else {
      callback(null, true)
      console.log('nt allowed ',origin);
      
    }
  }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',cors(corsOptions), indexRouter);
app.use('/data',cors(corsOptions), dataRouter);
app.use('/info',cors(corsOptions), infoRouter);
app.use('/patients',cors(corsOptions),patients);
app.use('/testcnn',cors(corsOptions),function(req,res){
  res.status(200).json({success:true})
});

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

module.exports = app;



