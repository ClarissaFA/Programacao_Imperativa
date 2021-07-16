// aula 12 - 06/07/2021
// .sort() = ordenar
// array.sort() é o método que nos ajuda a ordenar os elementos de um array

const frutas = ['maçã', 'banana', 'acerola', 'laranja', 'limão', 'abacate'];
//                 0          1         2        3         4        5
frutas.sort();
console.log(frutas);

// .sort((a, b) => a > b ? -1 : 1)

// ------- sort com números

const numeros = [50, 100, 10, 5, 25, 10];

//ordem crescente
console.log(numeros.sort(
  function(a,b) {
    return a-b;
  }
));

//ordem decrescente
console.log(numeros.sort(
  function(a,b) {
    return b-a;
  }
));