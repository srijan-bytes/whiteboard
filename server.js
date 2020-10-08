const http = require('http')
const express = require('express');
const app=express();
app.set('port', '3000')
console.log("My socket server is running");
const server = http.createServer(app)
server.on('listening', () => {
 console.log('Listening on port 3000')
})
server.listen('3000')
app.use(express.static('public'));



const socket = require('socket.io');
const io=socket(server);
io.sockets.on('connection', newConnection);
function newConnection(socket)
{
    console.log('new connection:'+socket.id);
    socket.on('mouse',mouseMsg);
    function mouseMsg(data) {
        socket.broadcast.emit('mouse',data);
        console.log(data);
    }
    socket.on('disconnect', () => console.log('Client has disconnected'))

}