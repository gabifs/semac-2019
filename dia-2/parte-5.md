# parte 5
## Configurando o envio de mensagens do servidor
Sempre que o servidor receber uma mensagem, ele deve emitir um evento de "chat message" e a mensagem recebida para todos as usuários conectados;
E o javascript da página de cada usuário deve perceber o evento, e escrever a mensagem no DOM;

```js
io.on('connection', function(socket){
  // monitor de evento "chat message"
  socket.on('chat message', function(msg){
    //emissor de evento "chat message" com a mensagem, para todos os conectados
    io.emit('chat message', msg);
  });    
});
/* 
  sempre que o servidor receber um evento "chat message" de algum usuário, 
  ele deve emitir um evento "chat messagem" com a mensagem para todos os conectados; 
*/
```

```html
<script>
  $(function () {
    var socket = io();

    //monitor do evento submit do formulário, responsável por enviar a mensagem para o servidor
    $('form').submit(function(e){

      e.preventDefault(); // impede o comportamento padrão do submit de recarregar a página.

      socket.emit('chat message', $('#m').val()); //emissor de evento, "chat message", junto com a mensagem escrita
      $('#m').val(''); //apaga a mensagem do campo de input
      return false;
    });

    //----------------------------------------------------------------------
    //monitor do evento "chat message", responsável por escrever a mensagem recebida do servidor
    socket.on('chat message', function(msg){
      $('#messages').append($('<li>').text(msg)); //insere um novo item na lista, contendo a mensagem do servidor sempre que o evento for disparado;
    });
    //----------------------------------------------------------------------
  });
</script>
```
