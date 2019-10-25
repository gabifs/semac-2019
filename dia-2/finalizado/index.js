var app = require('express')(); //importa express já executando ele
var http = require('http').Server(app); //importa o módulo http, criando um servidor, e enviando express para este servidor
var io = require('socket.io')(http); //importa o socket enviando todo o servidor pra ele;

// rota index
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// monitor de evento de conexão
io.on('connection', function(socket){
  // monitor de evento chat message
  socket.on('chat message', function(msg){
    //emissor de evento chat message
    io.emit('chat message', msg);
  });
});

//porta monitorada
http.listen(3000, function(){
  console.log('escutando porta 3000');
});
