## Como funcionam as páginas na web?
* Servidor é um computador com uma porta aberta para a web;
* O servidor deve controlar rotas, sempre que acontecer uma requisição ele deve der uma resposta;
* Rotas são as url's das páginas, esta url's possuem métodos de acesso, os mais comuns são GET e POST;
  GET - Método para o usuário pegar algo do servidor, sem criptografia;
  POST - serve para o usuário mandar alguma informação para o servidor, possui criptografia;

## Expressjs
O express é um framework para criação e gerenciamento de servidores, ele serve para abrir uma porta para a web, e controlar as rotas;

`npm install express`
após a instalação é criado o diretório node_modules, que contém todos os arquivos baixados pelo npm durante a instalação, e o nome do pacote express é inclído pelo npm dentro do arquivo package.json;

```js
//Primeiro importe o pacote;
const express = require('express');

//Execute o express guardando a execução em uma variável;
const app = express();

//rode o método listen, enviando a  porta de execução e um callback
app.listen(3000, ()=>{'Escutando porta 3000'});

```
