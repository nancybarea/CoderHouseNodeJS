var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// *************** INICION EJERCICIO **********************

const { engine } = require("express-handlebars");

// engine(extesion, callback)
app.engine(
  "hbs", // nombre del motor / plantilla  
  engine({ //engine viene del nombre como lo importe  const { engine } = require("express-handlebars");
    extname: ".hbs", // extension de los archivos, si no ponemos por defecto va ser .handlebars
    defaultLayout: "layout.hbs", //plantilla principal
    layoutsDir: __dirname + "/views/layouts", //ruta de la plantilla principal
    partialsDir: __dirname + "/views/partials", // ruta a las plantillas parciales
  })
);

// view engine setup
//app.set('views', path.join(__dirname, 'views')); //-->  viene por defecto al crear el proyecto, lo comento
//app.set('view engine', 'jade'); //-->  viene por defecto al crear el proyecto, lo comento

//ubicacion de los archivos de plantilla
app.set("views", "./views"); 

//motor de plantilla q vamos a utilizar "hbs"
app.set("view engine", "hbs"); 

app.get("/", function (req, res) {
  // render(archivo de plantilla, {})
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.get("/test", function (req, res) {
  // render(archivo de plantilla, {})
  res.render("test", { numeros: [5, 8, 2, 3] });
});

// *************** FIN EJERCICIO **********************


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
