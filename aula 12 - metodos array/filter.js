// aula 12 - 06/07/2021
// .filter() - método que retorna um novo array com os elementos que atendem a uma condição

const numeros = [1,2,-3,-5,0,7,8,9,19];

const numerosMaiores = numeros.filter(elemento => elemento >5)

console.log(numerosMaiores); //->[ 7, 8, 9, 19 ]