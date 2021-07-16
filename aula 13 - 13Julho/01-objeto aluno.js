//PARTE 1 ------------------------------------
// 1. Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele para q possa importa-lo como o módulo aluno.

// importei a função construtora feita no arquivo 01b

const Estudante = require("./01b- export funcao construtora");

// module.require(Alunos)     essa linha faz dar erro, tem q ser só uma fazendo o import

//objeto literal que fiz manualmente, baseou a função construtora do arquivo 01b
let aluno = {
  nome: 'Ana',
  faltas: 0,
  notas: [10, 8, 10, 9]
};

// teste para verificar que deu certo
let aluno2 = new Estudante('Beatriz', 1, [9, 10, 7, 8])
let aluno3 = new Estudante('Paulo', 2, [7, 10, 9,10])
console.log(aluno2);
console.log(aluno3);
