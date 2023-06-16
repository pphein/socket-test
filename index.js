var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(8000, function () {
    console.log('listening for requests on port 8000, http://localhost:8000');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {
    console.log("Someone connected id", socket.id);

    socket.on('restart', function () {
        io.sockets.emit('restart');
    });

    socket.on('increase', function () {
        io.sockets.emit('increase');
    });

    socket.on('decrease', function (data) {
        io.sockets.emit('decrease', data);
    });

})