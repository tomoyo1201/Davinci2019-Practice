var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res){
	res.sendFile(__dirname +'/client/index.html');
});
app.use('/client',express.static(__dirname+ '/client'));
const PORT = process.env.PORT 
serv.listen(PORT);

var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
	console.log('socket connection')
})
// File communication (Express)
// 	Client asks server for a file (Ex: playerImg.png)
// 	localhost 

// Package communication (Socket.io)
// 	Client sends data to server (Ex: Input)
// 	Server sends data to client (Ex: Monster position)