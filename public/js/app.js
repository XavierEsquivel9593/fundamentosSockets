let socket = io();

socket.on('connect', function () {
    console.log('conectado al servidor')
});

socket.on('disconnect', function () {
    console.log("se perdio la conexion con el servidor");
});
socket.emit('enviarMensaje', {
    usuario: "xavier",
    asunto: "saludar"
}, function (resp) {
    console.log(resp);
});
//escuchar
socket.on('enviarMensaje', (resp) => {
    console.log(resp);
});