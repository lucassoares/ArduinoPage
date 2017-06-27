require('colors');
var app = require("express")();
var express = require("express");

var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
	res.sendFile("index.html", {root: __dirname});
});

var SerialPort = require("serialport");
var serialport = new SerialPort("COM7");

serialport.on("open", function(){
	console.log("Porta Serial esta aberta".green);
});

serialport.on("error",function(erro){
	console.log("Porta serial com erro ou arduino não conectado".red);
	// chamar socketio para mandar msg para o html
	//io.emit('error', '404');
});

serialport.on("data", function(data){
	io.emit("dadosArduino",{
		 valor : data[0]
	});
});

io.on("connection", function(socket){
	console.log("Um usuario esta conectado".yellow);
});

http.listen(3000,function(){
	console.log("Servidor criado na porta 3000".green);
});

