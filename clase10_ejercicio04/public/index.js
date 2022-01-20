const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente

// Cliente
socket.on('msgTodosProductos', data => {
    console.log(data);
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
            <td>${elem.nombre}</td>
            <td>${elem.precio}</td>
            <td><img src="${elem.fotoUrl}" width=150 height=80></td>
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
        nombre: document.getElementById("nombre").value,
        precio: document.getElementById("precio").value,
        fotoUrl: document.getElementById("fotoUrl").value
    };
    socket.emit("msgNuevoProducto", nuevoMensaje);
    return false;
}