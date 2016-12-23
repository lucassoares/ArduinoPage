# ArduinoPage
Página feita em HTML e servidor feito em NODEJS, para exibir informações dados pelo Arduino, totalmente em tempo real, utilizando o servidor node + pacotes express e socketio

<h2> Como usar </h2>
Primeiro, você precisa ter NodeJS em seu computador.
- Ubuntu
```
sudo apt-get install nodejs
```
 
- Windows
  - [Instalador Windows x86](https://nodejs.org/dist/v6.9.2/win-x86/node.exe)
  - [Instalador Windows x64](https://nodejs.org/dist/v6.9.2/win-x64/node.exe)
  
- Serialport
- Express
- SocketIO

Vamos instalar utilizando a biblioteca NPM 
- Instalando com cmd

```
npm install serialport
```
```
npm install express
```
```
npm install socketio
```

<h2> Utilizando </h2>

Inicie seu CMD e vá para a pasta do projeto, com o diretório no cmd execute (com a placa arduino conectada no pc)
```
node server.js
```

esperer até o servidor carregar e mostrar as mensagens de aviso, após isso abra seu navegador com o endereço
```
localhost:3000
```
e espere a página carregar e pronto, os dados do arduino serão mostrados na tela, neste exmplo fiz com pontos e um record.

<h3>Erros e informações</h3>
Caso seja necessário, troque sua porta no arquivo **server.js** para que fique de acordo com sua porta

Caso queira saber mais:

- http://socket.io/
- http://expressjs.com/pt-br/
- https://www.npmjs.com/
- https://nodejs.org/en/


<h3>Sobre </h3>
Este projeto foi desenvolvido como protótipo para auxiliar na exposição de um game feito com Arduino, **StopIT** e assim ficar mais fácil a visualização de pontos e recordes marcados com o jogo.

Desenvolvido por Lucas Soares


