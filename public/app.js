var socket = io.connect('http://localhost:8000');

var restart = document.getElementById('restart');


restart.addEventListener('click', function() {
    socket.emit('restart');
});


socket.on('restart', function() {
    alert('Restart');
    window.location.reload(true);
});