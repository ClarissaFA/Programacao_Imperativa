// 4. aqui vou importar a função construtora Aluno, e para isso a guardo em uma nova variável
let Aluno = require('./aluno')

// 8. importo o módulo do curso:
let curso = require('./curso')

// 5. crio um novo aluno (que vai ser um objeto literal), usando a função construtora Aluno (importada previamente)
// cada novo aluno é uma nova variável

let helena = new Aluno('Helena', 0, [9, 7, 8, 10])
let clarissa = new Aluno('Clarissa', 1, [9, 10, 10, 9])
let debora = new Aluno('Débora', 2, [10, 9, 8, 10])
let carlos = new Aluno('Carlos', 3, [7, 5, 8, 6])
let ana = new Aluno('Ana', 1, [7, 8, 6, 4])
let derick = new Aluno('Derick', 4, [8, 7, 6, 9])

//TESTES
//console.log(helena.calcularMedia()); //-> 8.5 teste para verificar se o método para calcular média funciona (funicona)

// // verificar se o método de adicionar faltas funciona
// // a. executar o metodo:
// helena.adicionarFalta();
// // b. chamar as faltas para ver se aumentou:
// console.log(helena.faltas); //->1
// helena.adicionarFalta();
// console.log(helena.faltas); //->2

// // TESTE do modulo curso, se incluiu um aluno:
// // a. executar o método:
// curso.adicionarAluno(helena);
// // b. chamar a propriedade do objeto (listaEstudantes):
// console.log(curso.listaEstudantes); //-> [ Aluno {nome: 'Helena', faltas: 2, notas: [ 9, 7, 8, 10 ], calcularMedia: [Function (anonymous)], adicionarFalta: [Function (anonymous)] } ]
// c. testar o "..." PARÂMETRO REST para incluir vários de uma vez só:
curso.adicionarAluno(helena, clarissa, debora, carlos, ana, derick);
// console.log(curso.listaEstudantes); //-> retornou todos os objetos aluno
// console.log('-----------------------------')
// console.log(curso);
console.log('-----------------------------')
// teste do método de aprovação
// console.log(curso.aprovarAluno(helena))
// console.log(curso.aprovarAluno(carlos))
console.log(curso.listarAprovacoes());


// criar função para dar um relatório sobre o aluno
relatorio = function(aluno) {
  let media = aluno.calcularMedia();
  let status = curso.aprovarAluno(aluno);
  console.log(` 
  Nome: ${aluno.nome}
  Faltas: ${aluno.faltas}
  Notas: ${aluno.notas}
  Média: ${media}
  Aprovado: ${status}`)
};

relatorio(clarissa);

// automatizar a função do relatório para todos os alunos:

curso.listaEstudantes.forEach((elemento) => relatorio(elemento));
