/* 
Dada la siguiente constante: const frase = 'Hola mundo cómo están'
Realizar un servidor con API Rest usando node.js y express que contenga los siguientes endpoints get:
1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase (num 1 refiere a la primera letra), en un campo ‘letra’.
3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase (num 1 refiere a la primera palabra), en un campo ‘palabra’.
Aclaraciones:
- En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
➢	{ error: "El parámetro no es un número" } cuando el parámetro no es numérico
➢	{ error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.
*/

const express = require('express'); // libreria para crear servidor
const APP = new express(); // para crear servidor
const PORT = 8080; // para crear servidor : puerto 
const FRASE = "Hola Mundo como estan"; // constante dada en el enunciado

// 1) '/api/frase' -> devuelve la frase en forma completa en un campo ‘frase’.
APP.get('/api/frase',(req,res)=>{ 
    res.send({FRASE});
})

//2) '/api/letras/:num  -> devuelve por número de orden la letra dentro de esa frase 
//(num 1 refiere a la primera letra), en un campo ‘letra’.
APP.get('/api/letras/:num',(req,res)=>{
    console.log("query: ", req.query); // por consola muestra []
    console.log("params: ", req.params); // por consola muestra ejemplo {num: '4'}
    let num = parseInt(req.params.num); //uso params pq viene por ruta, sino usaria query para los que vienen por GET
     
    if (num < 1 || num > FRASE.length) {
       res.send({error: "El parametro esta fuera de rango"});
    }else if( isNaN(num)) { // no uso typeof pq js toma como q es numero y sale por OK 
        res.send({error: "El parámetro no es un número"});
    }else {
       res.send(FRASE[num-1]);
    }    
    
    // otra forma de escribirlo: observar que agregue el "return" (asi lo hace el profesor)
    /*  
    if( isNaN(num)) { // no uso typeof pq js toma como q es numero y sale por OK 
        return res.send({error: "El parámetro no es un número"})
    }
    if (num < 1 || num > FRASE.length) {
       return res.send({error: "El parametro esta fuera de rango"})
    } 
    res.send(FRASE[num-1]); 
    */

    //otra manera de escribirlo contemplando 1 error
    //isNaN(num) || num < 1 || num > FRASE.length ? res.send({error: "El parametro esta fuera de rango"}) : res.send(FRASE[num-1]);
    
})

//3) '/api/palabras/:num  -> devuelve por número de orden la palabra dentro de esa frase 
//(num 1 refiere a la primera palabra), en un campo ‘palabra’.
APP.get('/api/palabras/:num',(req,res)=>{
    let num = parseInt(req.params.num);
    let arrFrase = FRASE.split(" "); //split -> separo la frase segun un espacio
    isNaN(num) || num < 1 || num > arrFrase.length ? res.send({error: "El parametro esta fuera de rango"}) : res.send(arrFrase[num-1]);
})

//expongo el servidor creado al http
const connectedServer = APP.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${connectedServer.address().port}`);
})
connectedServer.on("error", error => console.log(`Error en servidor ${error}`));

//para probar voy al navegador y pongo http://localhost:8080