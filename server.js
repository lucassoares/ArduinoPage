const express = require('express')();
const SerialPort = require('serialport');
const serialport = new SerialPort('COM7');
const bodyParser = require('body-parser');
const http = require('http').Server(express);
const io = require('socket.io')(http);

app.use(bodyParser);

app.get('/', (req, res)=>{
	res.sendFile('index.html', {root: __dirname});
});

app.post('/cadastrar', async(req, res)=>{
	console.log(req.body);
	res.send();
});

serialport.on('open',()=>{
	console.log('Porta Serial aberta');
});

serialport.on('error',(erro)=>{
	console.log('Porta serial com erro ou arduino não conectado');
});

serialport.on('data',(data)=>{
	io.emit('dadosArduino',{
		 valor : data[0]
	});
});

io.on('connection',(socket)=>{
	console.log('Usuário conectado');
});

http.listen(3000,()=>{
	console.log('Servidor criado na porta: 3000');
});