## Introdução ao javascript

### Hello world
* Crie um diretório para o seu projeto;
* Crie um arquivo com a extensão .js;

`console.log('hello world');`

### Declaração de variáveis
* `var x = 42;` - está caindo em desuso;
* `let y = 42;`
* `const z = 42;`

### Definindo funções
```js
function numero() {
  return 13;
}

var num = function () {
  return 13;
}
//terceira forma arrow function
var num2 = ()=>{
  return 13;
}
```

### Objetos literais
Bastante parecido com as estruturas da linguagem C, porem também aceitam receber funções (métodos);
```js
var carro = {
  cor: "vermelho",
  posicao: 0,
  //método
  andar: function(){
    this.posicao = this.posicao + 1;
  }
};

console.log(carro.posicao);
carro.andar();
console.log(carro.posicao);

```

### Assincronicidade

Javascript é uma linguagem assincrona, diferente de outras linguagens como C ou Python que são sincronas, em resumo isso significa que JS não espera o processamento de uma função terminar para começar a execução de outra função.

```js
console.log('texto 1');
//setTimeout é utilizado para realizar um delay
setTimeout(
  ()=>{
    console.log('texto 2')
  },
  2000
);

console.log('texto 3');
```
---
```js
setTimeout(
  ()=>{
    console.log('texto 1')
  },
  2000
);

setTimeout(
  ()=>{
    console.log('texto 2')
  },
  2000
);

setTimeout(
  ()=>{
    console.log('texto 3')
  },
  2000
);
//Em uma linguágem síncrona, este programa levaria 6 segundos pra executar, mas em JS leva apenas 2 devido a característica assíncrona
```

### Callbacks
Como JS é a assíncrono as funções recebem outras funções como parâmetro, chamadas callback, que recebem o valor da execução e realizam o processamento;

```js
const fs = require('fs');
//função de leitura de um arquivo, recebe o caminho do arquivo, o formato do arquivo e um callback.
fs.readFile('./texto.txt', 'utf8', callback);

//--------------------------
//o callback é um parâmetro esperado e preenchido pela função fs.readFile. Gerlmente expressa na seguinte forma.
function callback (err, data){
  if (err) throw err;
  console.log(data);
}
//-------------------------

//cuidado com os paranteses nas funçoes de callback

```
