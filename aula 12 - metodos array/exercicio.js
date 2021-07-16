// Exercício Métodos de arrays - PG 06/06/2021
// 1. Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let numPar = [2,4,6,8]
let numImpar = numPar.map(n => n-1);
console.log(numImpar);


//1.2 exercício da minha cabeça
let numeros = [1,2,3,4,5,6,7,8,9]
let numerosImpares = numeros.filter(n => n%2 ==1) 
console.log(numerosImpares);

let numerosPares = numeros.filter(n => n%2 ==0)
console.log(numerosPares);


// 2. Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let nomes = ['Clarissa', 'Maria', 'Raquel', 'Roberta', 'Maria']
// let nomeMaria = nomes.filter(nome => nome == 'Maria')
console.log(nomes.filter(n => n == 'Maria'));


// 3. Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let n = [1,5,9,3,7]
const nFormatado = n.reduce((acumulador, elemento) => acumulador + '-' + elemento)
console.log(nFormatado);


// 4. Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.

let animais = ['coelho', 'macaco', 'peixe', 'baleia'];
let nome = ['Meg', 'Pingu', 'Peixeoto', 'Plena'];

animais.forEach(x => console.log(`O animal é ${x}`));

// let identificacao = (x, y) =>{return `O animal ${animais} se chama ${nome}`}
// console.log(identificacao(animais,nome))

animais.forEach((pet, index) => {
  console.log(`O nome do animal ${pet} é ${nome[index]}`)
})



