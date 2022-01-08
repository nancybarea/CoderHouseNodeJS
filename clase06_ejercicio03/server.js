// CREAR SERVIDOR Y EXPONER AL HTTP, CON EXPRESS
// debo instalarlo sino no va a funcionar --> npm install express

// incluyo libreria. Inicializo.
const express = require("express");

//creo servidor
const server = express(); // se suele poner a la variable app o server
const PORT = 8080;

// configuro peticion GET ( url y callback)
server.get(`/`, (request,response) => {
    response.send({ //rta formato json
        mensaje: "Hola Mundo"
    });  
    //response.send("Hola Mundo"); //rta formato txt/html
})

//expongo el servidor creado al http
//en caso de no enviar puerto, busca el primero que este libre (eso no se puede hacer con node)
/* ejemplo sin indicar puerto
const connectedServer = server.listen(0, ()=>{
    console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`);
})
*/
const connectedServer = server.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`);
})
connectedServer.on("error", error => console.log(`Error en servidor ${error}`));

//para probar voy al navegador y pongo http://localhost:8080