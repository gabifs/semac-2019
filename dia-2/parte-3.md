# parte 3
## Verificando conexões
Precisamos configurar o socket para identificar as conexões de usuários no chat

```js
var app = require('express')(); //importa express já executando ele
var http = require('http').Server(app); //importa o módulo http, criando um servidor, e enviando express para este servidor

//---------------------------------------
var io = require('socket.io')(http); //importa o socket enviando todo o servidor pra ele;
//---------------------------------------

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

//---------------------------------------------
// monitor de evento de conexão
io.on('connection', function(socket){
  console.log('usuario connectado');
  //mensagem será impressa no console sempre que um usuário se conectar
});

//----------------------------------------------

//porta monitorada
http.listen(3000, function(){
  console.log('escutando porta 3000');
});
```

```html
<!-- adicionar antes da tag </body> -->
<!-- módulo do socket -->
<script src="/socket.io/socket.io.js"></script>
<script>
  //execução do módulo
  var socket = io();
</script>
```
