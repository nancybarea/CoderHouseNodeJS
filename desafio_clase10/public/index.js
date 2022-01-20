const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente

// Cliente
socket.on('msgTodosProductos', data => {
    render(data);
})

function render (data){
    let html
    if (data.length != 0 ) {
        html = `<table>
        <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Foto</th>
        </tr>`
        html = html + data.map(function(elem, index){
            return(`
            <tr>
            <td>${elem.title}</td>
            <td>${elem.price}</td>
            <td><img src="${elem.thumbnail}" width=150 height=80></td>
            </tr>
            `)
        }).join(" ");    
        html = html + `</table>`
    }else{
        html = "No hay ningun producto dado de alta."
    }

    document.getElementById("listadoProductos").innerHTML = html;
}

function addMessage(e){
    let nuevoMensaje = {
        title: document.getElementById("nombre").value,
        price: document.getElementById("precio").value,
        thumbnail: document.getElementById("fotoUrl").value
    };

    /*
    fetch("api/productos")
    .then( function (nuevoMensaje) {
        //aca puedo hacer algo con el array recibido con los datos nuevos
        return nuevoMensaje.json
    })
    .then ( function (data){
        return console.log(data)
    })
    */

    socket.emit("msgNuevoProducto", nuevoMensaje);
    return false;
}