### Rotas

```js
const express = require('express');
const app = express();
//---------------------------------
//método de requisição GET, recebe um callback com dois parâmetros requisicao (req), resposta(res) que serão preenchidos pelo app.get.
app.get('/', (req,res)=>{
  //método res.send(), envia uma resposta para o navegador
  res.send('hello world');
});
//--------------------------------

app.listen(3000, ()=>'Escutando porta 3000');
```

### View

```js
const express = require('express');
const app = express();
//---------------------------------

app.get('/', (req,res)=>{
  //método sendFile envia um arquivo para o navegador
  res.sendFile('./index.html');
});

//--------------------------------

app.listen(3000, ()=>'Escutando porta 3000');
```
