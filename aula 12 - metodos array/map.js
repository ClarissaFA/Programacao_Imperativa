// aula 12 - 06/07/2021
// .map() - método que cria nova matriz com os resultados da chamada de uma função para cada elemento da matriz

let letrasMinusculas = ['a','b','c','d'];

// let letrasMinusculas = letrasMaiusculas.map(
//   function maiuscula(elemento) {
//     return elemento.toUpperCase();
//   }
// );

let letrasMaiusculas = letrasMinusculas.map(maiuscula = (a) => {return a.toUpperCase()})

const uppercase = lowercase.map(letter => letter.toUpperCase())


