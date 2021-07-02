//objeto cachorro
let cachorro={nome: 'Mackenzie',
    idade: 6,
    sexo: 'fêmea',
    cor: 'cinza',
    comportamento: function() {return 'A '+this.nome+' é muito brincalhona'}};

//spread operator - operador de propagação - quando for objeto envolver por {}
//É muito útil quando se precisa quebrar um array para passar seus valores para uma função ou construtor de um objeto como argumentos de valores separados. Serve principalmente como um atalho para unir 2 ou mais arrays independentes.
let dadosCachorro={...cachorro};
console.log(dadosCachorro.idade);