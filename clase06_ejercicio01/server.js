// CREAR SERVIDOR Y EXPONER AL HTTP, CON NODEJS

// incluyo ya libreria http
const http = require("http");

//creo servidor
const server = http.createServer((peticion, respuesta) => {
	respuesta.end("Hola Mundo")
})

//expongo el servidor creado al http
const connectedServer = server.listen(8080, ()=>{
    console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`);
})

//para probar voy al navegador y pongo http://localhost:8080