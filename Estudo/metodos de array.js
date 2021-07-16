// métodos de arrays

// .map() - pega um array e aplica uma função nele, aí isso cria um novo array e o array original não é alterado
let array1 = [2, 4, 6];

let array2 = array1.map((n) => {
  return n * 2;
})
console.log(array1); //-> [ 2, 4, 6 ]
console.log(array2); //-> [ 4, 8, 12 ]

console.log('---------------------')

// .filter() - faz um filtro no array e retorna um novo array (tipo select where)
let idade = [22, 8, 17, 14, 30];
let maiorDeIdade = idade.filter((i) => {
  return i> 18;
})
console.log(idade) //-> [ 22, 8, 17, 14, 30 ]
console.log(maiorDeIdade) //--> [ 22, 30 ]

console.log('---------------------')

// .reduce() - soma todos os itens do array, um a um, tipo numerologia. Aí ele 'reduz' o array de vários números para um único número, que é o resultado da soma.
// mas pode ser qualquer operação, ele vai fazer essa operação com todos os itens do array e retornar o reusltado dessa operação feita com todos os itens do array

let numeros = [1, 5, 8]
let soma = numeros.reduce((a, elementoDoArray) => {
  return a + elementoDoArray;
})
console.log(soma); //-> 14

let subtracao = numeros.reduce((a, elementoDoArray) => {
  return a - elementoDoArray;
})

console.log(numeros); //-> [ 1, 5, 8 ]
console.log(subtracao); //-> -12

console.log('---------------------')

// .forEach() - percorre os elementos do array
//declaro a variável e ao usar o forEach meio q vira uma função, entao eu só chamo ela, não precisa guardar dentro de uma nova variável

let paises = ['Brasil', 'Cuba', 'Peru'];

paises.forEach((p) => {
   console.log(`seu destino é ${p}!`)
})

//-------outras formas de fazer:
console.log(`seu destino é ${paises[0]}!`)
console.log(`seu destino é ${paises[1]}!`)
console.log(`seu destino é ${paises[2]}!`)

//---------outras formas de fazer:
for (i=0; i<paises.length; i++) {
  console.log(`seu destino é ${paises[i]}!`)
}

console.log('---------------------')

//.slice() - ele corta o array, inclui no novo array o primeiro índice, onde inciciou o corte, mas deixa de fora o último índice, onde terminou o corte. "Deixa a ponta do pão de fora"

let frutasDispoiveis = ['banana', 'morango', 'cereja', 'maca', 'pera']
let frutasEmFalta = frutasDispoiveis.slice(1, 4)

console.log(frutasDispoiveis) //-> [ 'banana', 'morango', 'cereja', 'maca', 'pera' ]
console.log(frutasEmFalta) //-> [ 'morango', 'cereja', 'maca' ]

console.log('---------------------')

// .splice() - para remover ou adicionar elementos. altera o array original
// tem três parâmetros: início = onde começa a mudança, já vai alterar esse onde começou
//o segundo parâmetro é quantos itens vai excluir, a partir do início
//o terceiro parâmetro é oq quer incluir, e inclui no lugar dos itens q foram removidos
let numeros1 = [3, 4, 5, 6, 7];
numeros1.splice(2, 5, 10);
console.log(numeros1); //-> [ 3, 4, 10 ]

// frutasDispoiveis.splice(1, 2, 'pão')
// console.log(frutasDispoiveis) //->[ 'banana', 'pão', 'maca', 'pera' ]

// se der concole.log com o splice dentro, ele retorna os itens que cortou fora
console.log(frutasDispoiveis.splice(1, 2, 'pão')) //->

console.log(frutasDispoiveis)
