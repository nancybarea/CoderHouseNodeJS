var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// ********************** INICIO ejercicio  **********************

const fs = require('fs') // lo vamos a necesitar para levantar las plantillas

// 1 - CREAMOS EL MOTOR
// engine(extesion, callback)
app.engine('hbs', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    // this is an extremely simple template engine
    var rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
    return callback(null, rendered)  //null es parametro error.
  })
})

// view engine setup
//app.set('views', path.join(__dirname, 'views')); //--> lo que viene x defecto al crear proyecto express
//app.set('view engine', 'jade'); //--> lo que viene x defecto al crear proyecto express

// 2 - PATH donde van a estar nuestras vistas/plantillas
app.set('views', './views') 

// 3 -INDICO que motor vamos a usar -- el que creamos antes.
app.set('view engine', 'hbs') 


app.get('/', function (req, res) {
  // render(archivo de plantilla, {})  // el archivo de plantilla no le pongo extencion pq ya lo indico antes hbs
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

// ********************** FIN ejercicio  **********************

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
