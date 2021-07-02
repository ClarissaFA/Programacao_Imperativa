// 01/07/2021 - objeto
// "tudo é objeto" 
// tem características (PROPRIEDADES)
// e tem os corportamentos tbm, q aí são funções (MÉTODOS)

let pessoa1 = {            
  nome: 'Clarissa',       //vírgula é necessária entre as propriedades
  idade: 31,
  temCachorro: false,
  falarOi: function() {             // tem um método: uma função dentro do objeto
    console.log('Oi')
  },
  falarTchau: function() {
    return 'Tchau'
  }
}

//chamar a função, coloca um . entre o objeto e as prop, mas é diferente de propriedade pra método

console.log(pessoa1);      // chama tudo do objeto
console.log(pessoa1.falarOi()); //função com return
pessoa1.falarOi();        // é uma função/MÉTODO dentro do objeto, então chamo assim       
console.log(pessoa1.nome);  // é uma característica/PROPRIEDADE do objeto, então tenho q dar o console.log pra chamar


//------- OBJETO CALCULADORA

let calculadora = {
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

// chamo a função com console.log pq usei return

console.log(calculadora.somar(5, 3));
console.log(calculadora.somar('banana', 3));
console.log(calculadora.somar(5, 'bb'));;

//como dizer q os parâmetros devem ser números?



