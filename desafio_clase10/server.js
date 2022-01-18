// De donde saque info para hacer este ejercicio.
//https://www.youtube.com/watch?v=ppiAvvkvAz0

const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const { engine } = require("express-handlebars");

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('./public'))

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
app.set("views", "./views");  //ubicacion de los archivos de plantilla
app.set("view engine", "hbs"); //motor de plantilla q vamos a utilizar "hbs"


let listadoProductos = []

// Esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get('/', (req, res) => {
    //res.render("body", mensajes);
    res.render("body", listadoProductos);
})

//inicializamos el canal de websockets
io.on('connection', socket => {
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('¡Nuevo Cliente conectado!')
    //envio datos al cliente (desde servidor)
    socket.emit('msgTodosProductos', listadoProductos ) // (evento, msg)

    socket.on('msgNuevoProducto', data => {
        listadoProductos.push(data)  //agrego al array el nuevo mensaje
        io.sockets.emit('msgTodosProductos', listadoProductos); // para avisar a todos que llego un nuevo mensaje
    })
   
})

// El servidor funcionando en el puerto 8080
httpServer.listen(8080, () => console.log('SERVER ON'))