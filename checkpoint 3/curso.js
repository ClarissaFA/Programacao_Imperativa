// 6. criar objeto literal para o curso
let curso = {
  nome: 'CTD',            // PROPRIEDADE
  notaAprovacao: 7,
  faltasMax: 2,
  listaEstudantes: [],   // deixo vazio, depois coloco os alunos que criei anteriormente
  adicionarAluno: function(...objetoAluno) {   //  MÉTODO (função dentro do objeto) "..." PARÂMETRO REST diz q posso incluir um ou vários de uma vez só
    this.listaEstudantes.push(...objetoAluno)
  },
  aprovarAluno: function(aluno) {
    let mediaAluno = aluno.calcularMedia()
    if (mediaAluno >= this.notaAprovacao && aluno.faltas < this.faltasMax) {
      return true;
    } else if (aluno.faltas == this.faltasMax && mediaAluno >= this.notaAprovacao*1.1) {
      return true;
    } else return false;
    },
  listarAprovacoes: function() {
    let listaAprovados = [];
    this.listaEstudantes.forEach(aluno => {listaAprovados.push(this.aprovarAluno(aluno))});
    return listaAprovados
  },
}


// 7. deixo para ser importado no outro arquivo em q vou usar
module.exports = curso;
