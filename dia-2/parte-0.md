## Inicialização do projeto

Em uma nova pasta execute os seguintes comandos:
* inicialização
  * `npm init`
* instalação do express
  * `npm install express`
* instalação do socket.io
  * `npm install socket.io`
* instalação do nodemon, componente que reinicia o servidor automáticamente (opcinal)
  * `npm install --save-dev nodemon`
  * Crie um script para usar o nodemon, dentro de package.json > script. Normalmente são usados os nomes "dev" ou "start" para os nomes de script
    * `"dev": nodemon index.js`
    * Execute o comando `npm run dev` para executar o script
