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
})

// El servidor funcionando en el puerto 8080
httpServer.listen(8080, () => console.log('SERVER ON'))

//inicializamos el canal de websockets
io.on('connection', socket => {
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log('Usuario conectado')
    //envio datos al cliente (desde servidor)
    socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor') // (evento, msg)

    // Servidor
    socket.on('notificacion', data => {
        console.log(data)
    })

})
