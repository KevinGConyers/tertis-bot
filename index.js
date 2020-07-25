var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.use(express.static('game'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/game/index.html');
  });
  
  io.on('connection', (socket) => {
    console.log('a user connected');
  });

  http.listen(3000, () => {
    console.log('listening on *:3000');
  });