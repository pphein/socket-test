var socket = io.connect('http://localhost:8000');

var value = 0;

var restart = document.getElementById('restart');
var increase = document.getElementById('increase');
var decrease = document.getElementById('decrease');

increase.addEventListener('click', function () {
    value = value + 1;
    socket.emit('increase', value);
});

decrease.addEventListener('click', function () {
    value = value - 1;
    socket.emit('decrease', value);
});

restart.addEventListener('click', function () {
    socket.emit('restart');
});

socket.on('increase', function (data) {
    value = data
    document.getElementById('value').innerHTML = value;
    // alert(value);
});

socket.on('decrease', function (data) {
    value = data;
    document.getElementById('value').innerHTML = value;
    // alert(data);
});


socket.on('restart', function () {
    alert('Restart');
    window.location.reload(true);
});