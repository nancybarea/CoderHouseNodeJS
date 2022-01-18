const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente

// Cliente
socket.on('Mensaje', data => {
    console.log(data);
    render(data);
})

function render (data){
    let html = data.map(function(elem, index){
        return(`<div>${elem.socketid} : ${elem.mensaje}</diV>`)
    }).join(" ");    

    document.getElementById("listadoMensajes").innerHTML = html;
}

function addMessage(e){
    let nuevoMensaje = {
        socketid: 1,
        mensaje: document.getElementById("mensaje").value
    };
    socket.emit("nuevo-mensaje", nuevoMensaje);
    return false;
}