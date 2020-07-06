const { io }= require('../app');
const {TicketControl} = require('../classes/ticket-control');

const controlTicket = new TicketControl;

io.on('connection', (client) => {
    console.log('usuario conectdo');

    client.on('siguienteTicket',(data,callback)=>{
        let siguiente = controlTicket.siguiente();
        console.log(siguiente);
        client.emit('siguienteTicket',siguiente);
    });

    client.emit('estadoActual',{
        actual: controlTicket.getUtlimoTicket(),
        ultimos4: controlTicket.getUtimos4()
    })

    client.on('atenderTicket',({escritorio},callback)=>{
        if(!escritorio){
            return callback({
                ok:false,
                msj: 'No hay tickets'
            });
        }
        let atenderTicket = controlTicket.atenderTicket(escritorio);
        callback({
            ok: true,
            atenderTicket
        });
        client.broadcast.emit('ultimos4',{
            ultimos4: controlTicket.getUtimos4()
        });
    });
    //actualizar, notificar cambios en los ultimos 4


});
//nodemon app -e js, html