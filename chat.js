var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var POST = process.env.PORT || 8080;//ここを修正