var socket = io();

var lblTicket1 = $('#lblTicket1');
var lblTicket2 = $('#lblTicket2');
var lblTicket3 = $('#lblTicket3');
var lblTicket4 = $('#lblTicket4');

var lblEscritorio1 = $('#lblEscritorio1');
var lblEscritorio2 = $('#lblEscritorio2');
var lblEscritorio3 = $('#lblEscritorio3');
var lblEscritorio4 = $('#lblEscritorio4');

var lnlTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
var lblEscritorios = [lblEscritorio1, lblEscritorio2, lblEscritorio3, lblEscritorio4];


socket.on('estadoActual', function (data) {
    actualizarHtml(data.ultimos4);
    //console.log(data);
});

socket.on('ultimos4',function(data){
    var audio = new Audio('public/audio/new-ticket.mp3');
    audio.play();    //console.log(data);
    actualizarHtml(data.ultimos4);
});

function actualizarHtml(ultimos4){
    for (let i= 0; i < ultimos4.length; i++) {
        lnlTickets[i].text(`Ticket ${ultimos4[i].numero}`);
        lblEscritorios[i].text(`Escritorios ${ultimos4[i].escritorio}`);
        
    }
}
