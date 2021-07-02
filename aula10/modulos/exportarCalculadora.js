// aula 10 - 29/06/2021

module.exports = {
  somar: (a, b) => {
      if(typeof a =="number" && typeof b =='number') { //testa o tipo, ou seja, se é um número e não uma palavra
      return a + b;
      }
      else {return 'Favor informar algarismos'}
  },
  subtrair: (a, b) => a - b,
  multiplicar: (a, b) => a * b,
  dividir: (a, b) => {
      if(b !== 0) {
         return a/b;
      } else {
        return 'Impossível dividir por 0'
      }
  }
}
