//desestruturar==> extração de valores de um objeto  ou array
//a desestruturação NÃO MODIFICA o objeto ou array original

//objeto cachorro
let cachorro={nome: 'Mackenzie',
    idade: 6,
    sexo: 'fêmea',
    cor: 'cinza',
    comportamento: function() {return 'A '+this.nome+' é muito brincalhona'}};
//no caso de objeto as variáveis são envolvidas por CHAVES
let {nome, idade, sexo, cor}=cachorro;
console.log(nome); 