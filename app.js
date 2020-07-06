const express = require('express');
const path = require('path');
const http = require('http');
const Socket = require('socket.io');

const app = express();
let server = http.createServer(app);
const publico = path.resolve(__dirname, './public');
//. mismo nivel//.. sale de la carpeta

//IO = publicacion dle backend
exports.io = Socket(server);
require('./sockets/socket');
//permitir publico
app.use(express.static(publico));//su direccion


const port = process.env.PORT || 3000;

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log('Conectado al puerto ', port);
});