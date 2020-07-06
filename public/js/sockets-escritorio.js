let socket = io();

var searchParams = new URLSearchParams(window.location.search);
var label = $('h4');
var small = $('small');

if(!searchParams.has('escritorio')){
    window.location='index.html';
    throw new Error(' el escritorio es necesario');
}
var escritorio = searchParams.get('escritorio');
$('h1').text(`Escritorio ${escritorio}`);

$('button').on('click', function(){

    socket.emit('atenderTicket',{escritorio}, function(resp){
        if(resp.msj){
            label.text(resp.msj);
            alert(resp.msj)
        }
        small.text(`Ticket ${resp.atenderTicket.numero}`);
    });
});
//console.log(escritorio);
