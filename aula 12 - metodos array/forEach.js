// aula 12 - 06/07/2021
// .forEach() = para cada um dos elementos
// método que chama a função uma vez para cada elemento do array

let cores = ['azul', 'amarelo', 'verde', 'branco'];

cores.forEach(
  function(elemento) {
    console.log(elemento)
  }
)  // -> retorna array mas com um elemento por linha, tipo uma lista

// console.log(cores); -> retorna array em linha corrida, normal

let pizza = ['fatia1', 'fatia2', 'fatia3', 'fatia4']

pizza.forEach((fatia) => console.log(`você recebeu a ${fatia}`))

