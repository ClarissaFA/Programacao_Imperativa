// Playground aula 04 - microdesafios

// if simples
let estaComFrio = false

if (estaComFrio == true) {
  console.log('experimenta esse chá de gengibre :)')
} else {console.log('que bom que está quentinha :D')}

//---------Sintaxe de uma função condicional utilizando if/else e sinal de igualdade
console.log('-------------------------------------')


let frase = (linguagem) => {
  if (linguagem == 'javascript') {
    return `Estou aprendendo ${linguagem}!`
  } else {
    return (`Aprenderei ${linguagem} mais adiante`)}
}

console.log(frase('javascript')); //-> Estou aprendendo javascript!
console.log(frase('blabla')); //-> Aprenderei blabla mais adiante

let afirmacao = (lingua) => {
  let mensagem = `Vou aprender ${lingua} mais tarde.`;
  if (lingua == 'java') {
    mensagem = `Estou aprendendo ${lingua}!`
  }
  return mensagem;
}

console.log(afirmacao('java'));
console.log(afirmacao('french'));

let fraseJS = frase('javascript');
console.log(fraseJS);



