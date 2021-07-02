// // Desafios aula 03

let somar = function somar(numA, numB) {
  return numA + numB;
};

console.log(somar(2,3)); //-> 5
//---
function subtrair(numA, numB) {
  return numA - numB;
};

let subtracao = subtrair();
console.log(subtrair(6,4)); //-> 2
//----
let divisao = function dividir(numA, numB) {
  return numA/numB;
};

console.log(divisao(9,3)); //-> 3
//-----
let multiplicacao = function (numA,numB) {
  return numA * numB;
};

console.log(multiplicacao(2,4)); //-> 8

//-------------GOL
let nomeJogador = 'Pelé'
let golsJogador = 7
let precoEmDolares = 100

function fazerGol() {
  // console.log('GOLL');
  // console.log(golsJogador++) 
  // console.log(precoEmDolares+=10000)
  // console.log(`É GOLLL! ${nomeJogador} fez ${golsJogador++} gols e agora vale ${precoEmDolares+=10000} dólares`);
  golsJogador++;
  precoEmDolares+=10000;
  console.log(`${nomeJogador} fez ${golsJogador} GOOOOLLLLS e agora seu valor é ${precoEmDolares} dólares.`)
 };

fazerGol(); //->Pelé fez 8 GOOOOLLLLS e agora seu valor é 10025 dólares.
fazerGol(); //->Pelé fez 9 GOOOOLLLLS e agora seu valor é 10025 dólares.

//----------------

let nome = 'Clarissa';
let numeroGols = 1;

function fezgol () {
  let novoGol = numeroGols +1;
  console.log(`Goool! ${nome} tinha feito ${numeroGols} gol e agora tem ${novoGol} gols! Huhuu`)
}

fezgol(); //-> Goool! Clarissa tinha feito 1 gol e agora tem 3 gols! Huhuu

//-----------------------------
console.log('-------------------------------------------');

const hatTrick = () => {
  fazerGol();
  fazerGol();
  fazerGol();
  let preco10perCent = precoEmDolares + (precoEmDolares/10);
  console.log(`${nomeJogador} fez três gols na mesma partida e agora seu valor é ${preco10perCent}, ou seja, 10% de valorização`);
};

hatTrick();
