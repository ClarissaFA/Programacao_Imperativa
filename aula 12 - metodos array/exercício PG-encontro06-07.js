
// 1. Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
numeros = [10,20,30,40]
numeros2 = [2,5,8,9,6,3]
function percentual(array) {
  let soma = array.reduce((acumulador, elemento) => acumulador + elemento);
  let divisao = array.map((x) => x/soma);
  let resultado = divisao.map((y) => y.toFixed(3));
  return resultado
};

console.log(percentual(numeros));
console.log(percentual(numeros2));

// tentativa sozinha: cada nº/somaTotal  
calculo = (array) => {
  let calc = array.map((n) => n/(array.reduce((y,z) => y+z)))
  let arredondar = calc.map((n) => n.toFixed(3))
  return arredondar
}

let numeros3 = [1, 2, 3.7, 20]
console.log(calculo(numeros));
console.log(calculo(numeros3));
// 2. Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let palavrasNumero = ['abelha', 'chuva', 'relâmpago', 'enchente', 'uva', 5]

let number = (array) => {
  let numero = array.slice(-1)
  return numero }
let num = console.log(number(palavrasNumero));

soPalavras = (array) => array.filter((palavra) => palavra.length > num)

console.log(soPalavras(palavrasNumero));






// 3. Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)













