const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente

window.addEventListener("DOMContentLoaded",() => { 
    let altaProducto = document.getElementById("altaProducto");
    altaProducto.addEventListener("click", addMessage);
})

//*******************************************************
//FUNCIONES
async function postData (url,data) {
    console.log("inicio a la funcion postData")
    try{
    console.log("postData: try")
    console.log(url)
    console.log(data)
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: { 'Content-Type': 'application/json; charset-utf:8'},
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    let respuesta = await response.json()
    return respuesta.error != undefined ?  respuesta : {error: "error postData"};
    }
    catch(error){
        console.error(error)
    }
  }
  
//*******************************************************
// Cliente
socket.on('msgTodosProductos', data => {
    console.log("socket.on : inicio");

    console.log("socket.on : con fetch llama al getProductos (trae todos los productos)");
    //llamo a getProductos: trae todos los productos. routes: productos.js "/"
    fetch("api/productos")
    .then( function (nuevoMensaje) {
        return nuevoMensaje.json(); // lo devuelvo en formato json
    })
    .then ( function (data){
        return console.log(data); //lo imprimo por consola la objeto json anterior
    })

    //render("body", {listadoProducto: data,  listadoExiste: true});
})

async function addMessage(e){

    e.preventDefault(); // cancela el evento de submit

    console.log("addMessage: inicio");
    
    let nuevoMensaje = {
        title: document.getElementById("nombre").value,
        price: document.getElementById("precio").value,
        thumbnail: document.getElementById("fotoUrl").value
    };

    console.log("addMessage: nuevoMensaje --> " + nuevoMensaje)
    console.log("addMessage: llama a la funcion postData");
    
    let rtaAgregarProducto = await postData('api/productos', nuevoMensaje);
    rtaAgregarProducto != null ? socket.emit("msgNuevoProducto", {status: "ok"}) : socket.emit("msgNuevoProducto", {status: "no ok"});
   
}


