// aula 09 módulos
// fora da pasta módulos

let humanAndDog = require('./modulos/ex02Aexport') //importação

console.log(humanAndDog.pessoa);
// { nome: 'Clarissa', idade: 31, sexo: 'F', filhos: 0 }
console.log(humanAndDog.cachorro);
// { nome: 'Quadrada', idade: 3, sexo: 'F', raca: 'border collie' }
console.log(humanAndDog.cachorro.raca); //posso pegar só uma propriedade
// border collie
console.log(humanAndDog.cachorro.nome);
// Quadrada