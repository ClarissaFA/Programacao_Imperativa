// 1. export da função construtora Alunos

//função construtora foi feita com base no objeto alunos e vai ser usada importada no outro arquivo para criar novos alunos

function Estudante(nome, faltas, notas) {
  this.nome = nome,
  this.faltas = faltas,
  this.notas = notas,
  this.Media = () => this.notas.reduce((acumulador,elemento) => acumulador+elemento,0)/this.notas.length;
  this.acumuloFaltas = () => this.faltas++;
};

// Alunos = (nome, faltas, notas) => {
//   this.nome = nome;
//   this.faltas = faltas;
//   this.notas = notas;
// };

module.exports = Estudante;


// 2. Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
// vou seguir escrevendo na função construtora feita anteriormente. Apenas adicono o método