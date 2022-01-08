// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 
// y responda un mensaje de acuerdo a la hora actual
//	- Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
//	- Entre las 13 y las 19 hs será 'Buenas tardes!'. 
//	- De 20 a 5 hs será 'Buenas noches!'.
// Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto lo está hacienda


// incluyo ya libreria http
const http = require("http");

//creo servidor
const server = http.createServer((request, response) => {
    //obtengo la fecha actual
    const date = new Date();
    //console.log(date); //--> devuelve 2022-01-08T20:47:27.816Z
    const hora = date.getHours();
    //console.log(date.getHours()); //--> devuelve 17
    let msgSaludo = "";    
	
    if (hora >= 6 && hora <= 12) {     
        msgSaludo = 'Buenos dias'; 
    }else if (hora >= 13 && hora <= 19) {     
        msgSaludo = 'Buenas tardes'; 
    }else {     
        msgSaludo = 'Buenas noches'; 
    }
    
    response.end(msgSaludo);
})

//expongo el servidor creado al http
const connectedServer = server.listen(8080, ()=>{})

//para probar voy al navegador y pongo http://localhost:8080