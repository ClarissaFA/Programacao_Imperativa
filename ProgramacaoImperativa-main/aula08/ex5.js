//trabalhando com mais de um objeto
let cachorro={nome: 'Mackenzie',
    idade: 6,
    sexo: 'fêmea',
    cor: 'cinza',
    comportamento: function() {return 'A '+this.nome+' é muito brincalhona'}};

let gato={nome: 'Tiffany e Daphne',
    idade: 11,
    sexo: 'fêmeas',
    cor: 'marrom e branca'};

console.log('Eu tenho 3 animais: ',cachorro.nome, gato.nome);
//mostrar que neste caso eu não consigo substituir cachorro por this pois estamos fora do objeto.

console.log(cachorro.comportamento());