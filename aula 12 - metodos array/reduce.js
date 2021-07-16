// aula 12 - 06/07/2021
// .reduce() - método que percorre o array e retorna um único valor. Ele acumula o resultado

const numeros = [1,2,-3,-5,0,7,8,9,19];

let resultado = numeros.reduce(
  function(totalizador,elementoDoArray) {
    return totalizador + elementoDoArray;
  }
);



console.log(resultado)