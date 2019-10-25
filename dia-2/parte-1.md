# parte 1
## Criação do servidor
O servidor para este tutorial é criado usando a biblioteca nativa do nodejs 'http' e enviando os metodos do express para ela, já que o socket precisa da biblioteca 'http';
```js
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('escutando porta 3000');
});
```
