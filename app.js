var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const sprzetRouter = require('./routes/sprzetRoute');
const wysylkaRouter = require('./routes/wysylkaRoute');
const zamowieniaRouter = require('./routes/zamowieniaRoute');

var app = express();

const sprzApiRouter = require('./routes/api/SprzetApiRoute');
app.use('/api/sprzet', sprzApiRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/sprzet', sprzetRouter);
app.use('/wysylka', wysylkaRouter);
app.use('/zamowienia', zamowieniaRouter);

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

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });

module.exports = app;
