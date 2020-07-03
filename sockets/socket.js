const{io}= require('../app');
io.on('connection', (client) => {
    console.log('usuario conectdo');
    client.on('disconnect', () => {
        console.log('el usuario se desconecto');
    });
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        client.broadcast.emit('enviarMensaje', data);
    });
    //enviar 
    client.emit('enviarMensaje', {
        asunto: "hola",
        hora: new Date().getFullYear()
    });
    //new Date().getTime()

});
