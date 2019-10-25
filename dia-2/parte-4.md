# parte 4
## Configurando o recebimento de mensagens no servidor
Sempre que o usuário submeter um mensagem, o javascript no lado do cliente deve emitir um evento "chat message" e a mensagem digitada para o servidor;
```js
// monitor de evento de conexão
io.on('connection', function(socket){
  // monitor de evento "chat message", imprime no console a mensagem recebida do usuário
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
  });
});

```

```html
<!-- módulo do socket -->
<script src="/socket.io/socket.io.js"></script>

<!-- ------------------------------------------------------------ -->
<!-- módulo do jquery -->
<script src="https://code.jquery.com/jquery-1.11.1.js"></script>
<!-- ------------------------------------------------------------ -->

<script>
  //usaremos jquery para facilitar a manipulação do DOM (a página html é normalmente chamada de DOM - document object model)
  $(function () {
    var socket = io();

    //$() é a forma como o jquery seleciona elementos do DOM
    //monitor do evento submit do formulário, responsável por enviar a mensagem para o servidor
    $('form').submit(function(e){

      e.preventDefault(); // impede o comportamento padrão do submit de recarregar a página.

      //$() é a forma como o jquery seleciona elementos do DOM
      //#m - indica que estamos selecionando o id='m'
      socket.emit('chat message', $('#m').val()); //emissor de evento, "chat message", junto com a mensagem escrita
      $('#m').val(''); //apaga a mensagem do id 'm'
      return false;
    });

  });
</script>
```
