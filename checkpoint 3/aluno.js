// 1. criar o objeto literal aluno na mão, é para ser um rascunho da função construtora, nem vamos usar depois

let joao = {
  nome: 'João',
  faltas: 0,
  notas: [5, 8, 7, 9]
}

// 2. fazer uma função construtora para criar os próximos alunos (objetos literais) de forma automatizada

let Aluno = function(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;
  this.calcularMedia = function() {        //criei um método para calcular a média(soma das notas/numero de notas)
    return (this.notas.reduce((acumulador, cadaNota) => acumulador + cadaNota))/this.notas.length
  };
  this.adicionarFalta = () => { return this.faltas++ }
}

// 3. exportar a função construtora de objetos, para quando precisar usar em outro arquivo
module.exports = Aluno;