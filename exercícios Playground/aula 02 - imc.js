// aula 02 - exercício 1
// console.log('Olá mundo!');

//aula 02 - exercício 2
//Declare, atribua e exiba 3 variáveis ​​por console: uma string, uma numérica e uma booleana.

// let nome = 'Clarissa'
// let idade = 31
// let inteligente = true

// console.log(Nome);
// console.log(Idade)  //sem ; tbm funciona
// console.log(inteligente)

// console.log('Nome: '+ Nome)
// console.log('idade: '+ Idade)
// console.log('Ela é inteligente? '+inteligente)

//aula 02 - exercício 3 - nutricionista/IMC
//variáveis: Nome, Sobrenome, Idade, Peso, Altura, Plano
//constantes: cada informação, por exemplo: José, da Silva, 27, 83.5kg, 1.70m, ouro
//a variável plano poderia ter o valor null, pois o usuário pode não ter um plano
let nome = 'Carlos'
let idade = 28
let peso = 80.1
let altura = 1.76
let plano = true
let imc = peso / (altura * altura)

function parecer() {
  //return nome+' tem '+idade+' anos e seu índice de massa corporal é '+imc.toFixed(2)
  return `${nome} tem ${idade} anos e seu IMC é ${imc.toFixed(2)}` //craaaaaseeeeeeee
}

console.log(parecer())

//------NOVA RESOLUÇÃO

function calcularIMC(peso, altura) {
  return (peso/(altura*altura));
};

let IMCcalculado = calcularIMC(peso, altura);
console.log(IMCcalculado); // -> 25.858729338842974

console.log(`${nome} tem ${idade} e seu IMC é ${IMCcalculado.toFixed(2)}`); // -> Carlos tem 28 e seu IMC é 25.85




