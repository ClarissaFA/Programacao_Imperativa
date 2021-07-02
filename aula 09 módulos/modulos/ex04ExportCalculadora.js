//criar função de cálculo e exportar
//dentro da pasta módulo

const calculadora = (num1, num2, operacao) => {
  if (operacao =='+') {
    return num1 + num2
  } else if (operacao == '-') {
    return num1 - num2
  } else if (operacao == '*') {
    return num1 * num2
  // } else if (operacao == '/' && num2 !=0) {
  //   return num1 / num2
  } else if (operacao == '/' && num2 == 0) {
    return 'Na divisão o denominador deve ser diferente de zero'
  } else {
    return num1 / num2
  }
}

// console.log(calculadora(2, 0, '/'));

module.exports = calculadora;