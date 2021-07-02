// importaCalculadora.js
// fora da pasta módulo

const { multiplicar } = require('./modulos/exportarCalculadora');
const operacoes = require('./modulos/exportarCalculadora');

function calcular(a, b, acao) {
  switch(acao) {
    case '+': console.log(operacoes.somar(a,b));
    break;
    case '-': console.log(operacoes.subtrair(a,b));
    break;
    case '*': console.log(operacoes.multiplicar(a,b));
    break;
    case '/': console.log(operacoes.dividir(a,b));
    break;
    default: console.log('digite uma opção válida');
  }
}

calcular(5,5,'*');