// aula 09 módulos
// fora da pasta módulos

let calcular = require('./modulos/ex03ExportFuncoes'); //importação

console.log(calcular.adicao(1,3)); // aqui seleciono a operação e coloco os valores que vou calcular
console.log(calcular.subtracao(5,4));