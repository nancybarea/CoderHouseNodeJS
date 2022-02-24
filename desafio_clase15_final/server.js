const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const productosRouter = require('./routes/productos');
const carritosRouter = require('./routes/carritos');
const mdw = require("./middlewares/mdw_url");

// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritosRouter);
app.use(mdw.ruta_invalida);

//productos en MEMORIA
//const cl_Producto = require("./modules/cl_Producto_MEMORIA"); //importo la clase cl_Producto
//const Producto = new cl_Producto();

//productos en archivo de texto
//const cl_Producto = require("./modules/cl_Producto_TXT"); //importo la clase cl_Producto
//const Producto = new cl_Producto();

//productos en base de datos
const cl_Producto = require("./modules/cl_Producto_DB"); //importo la clase cl_Producto
const { isConstructorDeclaration } = require('typescript')

const Producto = new cl_Producto(
  {
      client: "mysql",
      connection: {
          host: "127.0.0.1",
          database: "bdproductos",
          port: 3307,
      },
       pool: { min: 0, max: 7 },
  },
  "productos"
);
//const ProductoSqlite = new cl_Producto(
//  {
//    client: "sqlite3",
//    connection: { filename: "./DB/mydb.sqlite" },
//  },
//  "productos"
//);

//let listadoProductos = Producto.getProductos();
let listadoProductos
(async () => {
  try {
    listadoProductos = await Producto.getProductos();
  } catch (err) {
    console.error(err);
  }
})();

//abro conexion del lado del servidor
io.on("connection", (socket) => {  // connection no se puede modificar, va ese valor.
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Usuario conectado')
    //envio datos al cliente (desde servidor)
    socket.emit('mensaje_inicio', listadoProductos) // (evento, msg)

    socket.on('mensaje_AltaProducto', data => {  
        console.log("io.on sockek.on mensaje_AltaProducto: inicio (server.js):")
        if (data.estado != "OK"){
          console.log("El producto no fue dado de alta.")
        }else{
          console.log("El producto fue dado de alta correctamente.") 
          //mando mensaje a todos los conectados para actualizar su listado de productos.
          io.sockets.emit('mensaje_inicio', listadoProductos);         
        } 
      })

});

// El servidor funcionando en el puerto 8080
const PORT = process.env.PORT || 8080  // si no indico puerto cuando ejecuto, entonces pone 8080--> PORT=3000 node start
httpServer.listen(PORT, () => console.log('SERVER ON'))