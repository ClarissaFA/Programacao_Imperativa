// 01/07/2021   CALLBACK
// calback é a estrutura da sintaxe. 
// Não uso o termo 'callback', só formato dessa maneira, como um parâmetro de uma função 

let somar = (a,b) => {
  return a + b;
}

let subtrair = (a,b) => {
  return a - b;
}

let calculadora = (x,y,operacao) => {
  return console.log(operacao(x,y));
}

calculadora(2,3,somar);
calculadora(10,5,subtrair);