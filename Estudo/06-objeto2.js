// 15/07/2021 - continuação sobre objetos literais
// FUNÇÃO CONSTRUTORA DE OBJETOS  
// com essa função a criação de novos objetos fica automatizada
// usar Letra Maiúscula, por convenção, para diferenciar
// não da pra usar arrow function
// a cada this, usar = e ;
// depois que criar a função construtora de objeto, crio o novo objeto da seguinte forma:
// declaro a nova variável = new FuncaoConstrutora(parametros)
// PROPRIEDADE: é cada 'item' do objeto
// MÉTODO: é quando tem uma função dentro do objeto

// 1º. função construtora
let Pessoa = function(x, y, z) {
  this.nome = x;
  this.idade = y;
  this.temCachorro = z;
  this. falarOi = function() {return 'Oi!'}
  this. cumprimento = function(a) {return `Oi, ${a}, me chamo ${this.nome}`}
}

// 2º. criar novo objeto a partir da função construtora
let pessoa3 = new Pessoa('Débora', 35, true);

// 3º. chamando o novo objeto
console.log(pessoa3); //-> Pessoa { nome: 'Débora', idade: 35, temCachorro: true, falarOi: [Function (anonymous)] }

// 4º. chamando a propriedade de um objeto
console.log(pessoa3.nome); //-> Débora

//------------
let pessoa4 = new Pessoa('João', 20, false);
let pessoa5 = new Pessoa('Alice', 38, true);

console.log(pessoa4.cumprimento('Pedro'));
console.log(pessoa5.cumprimento('Pedro'));
console.log(pessoa3.cumprimento('Pedro'));
console.log(pessoa3.cumprimento(pessoa5.nome));