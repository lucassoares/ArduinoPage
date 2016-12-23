require('colors');
var app = require("express")();
var express = require("express");

app.use(express.static(__dirname + '/public'));

var http = require("http").Server(app);
var io = require("socket.io")(http);
app.get("/", function(req, res){
	res.sendfile("index.html");
});

var SerialPort = require("serialport");
var serialport = new SerialPort("COM4");

serialport.on("open", function(){
	console.log("Porta Serial esta aberta".green);
});

serialport.on("error",function(){
	console.log("Porta serial com erro ou arduino não conectado".red);
});

serialport.on("data", function(data){
	io.emit("dadosArduino", {
		 valor : data[0]
	});
});

io.on("connection", function(socket){
	console.log("Um usuario esta conectado".yellow);
});

http.listen(3000,function(){
	console.log("Servidor criado na porta 3000".green);
});

