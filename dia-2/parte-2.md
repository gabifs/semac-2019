# parte 2
## configurando a view
Configure a rota '/' para enviar um arquivo index.html
```js
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
```

Conteúdo base para a view index.html. 

O nosso chat será composto de uma lista de mensagens e um formulário de envio de mensagens;
```html
<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
  </head>
  <body>
    <h2>Mensagens: </h2>
    <hr>
    <!-- Lista onde as mensagens são inseridas -->
    <ul id="messages">

    </ul>
    <hr>
    <!-- Formulário composto de input e botão enviar -->
    <form action="">

      <!-- Área de input -->
      <input id="m" autocomplete="off" />

      <!-- Botão de envio -->
      <button>Enviar</button>
    </form>

    <script>
      // Adicione o script js aqui

    </script>
  </body>
</html>

```
