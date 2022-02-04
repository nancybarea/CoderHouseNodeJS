const socket = io.connect();

// BOTON ENVIAR - EVENTO CLICK
document.querySelector("form").addEventListener("submit", e=> {
    console.log("INICIO - boton Enviar del formulario");
    e.preventDefault();
    //obtengo los datos del formulario
    const mensaje = {
        author: document.querySelector("input[name=username]").value,
        text: document.querySelector("input[name=texto]").value
    };
    //envio el mensaje al servidor
    socket.emit("new_message", mensaje)   
})

//IMPRESION DE MENSAJES EN PANTALLA.
const render = data => {
    const html = data.map(elem => {
        return (`<div>
        <strong>${elem.author}</strong>
        <em>${elem.text}</em>
        </div>`)
    }).join("");
    document.querySelector("#messages").innerHTML = html;
};

//ESCUCHA DE NUEVO MENSAJE E IMPRIME POR PANTALLA
socket.on("messages", (data) => {
    render(data);
})

