let socket = io();

let titulo = $('#lblNuevoTicket');
// escuchar
socket.on('connect',function(){
    console.log('conectado al servidor');
});
//desconectado
socket.on('disconnect',function(){
    console.log('desconectado del servidor');
});

$('button').on('click',function(){
    socket.emit('siguienteTicket');
    socket.on('siguienteTicket', function(res){
        console.log(res);
        titulo.text(res);
    });
});

//escuchar
//socket.on('siguienteTicket',function(resp){
 //   console.log(resp);
//});