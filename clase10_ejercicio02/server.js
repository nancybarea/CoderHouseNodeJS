// De donde saque info para hacer este ejercicio.
//https://www.youtube.com/watch?v=ppiAvvkvAz0

const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta
app.use(express.static('./public'))

// Esta ruta carga nuestro archivo index.html en la raíz de la misma
app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname })
    //res.status(200).send("Hola Mundo");
})

let mensajes = [{socketid: 1, mensaje: "Inicio de Mensajes"}]

//inicializamos el canal de websockets
io.on('connection', socket => {
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('¡Nuevo Cliente conectado!')
    //envio datos al cliente (desde servidor)
    socket.emit('Mensaje', mensajes ) // (evento, msg)

    socket.on('nuevo-mensaje', data => {
        mensajes.push(data)  //agrego al array el nuevo mensaje
        io.sockets.emit('Mensaje', mensajes); // para avisar a todos que llego un nuevo mensaje
    })
   
})

// El servidor funcionando en el puerto 8080
httpServer.listen(8080, () => console.log('SERVER ON'))