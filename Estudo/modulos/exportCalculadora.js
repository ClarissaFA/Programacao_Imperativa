let objeto1 = {
  somar: function(a, b) {
      return a + b            
    },                          // virgula, estamos fazendo uma lista das propriedades métodos
  subtrair: function(a, b) {
    return a - b
    },
  multiplicar: function(a, b) {
    return a * b
    },
  dividir: function(a, b) {
    if (b == 0) {
      return 'Não é possível dividir por zero';
    } else {
      return a / b;
      } 
    }
};

module.exports = {objeto1}

