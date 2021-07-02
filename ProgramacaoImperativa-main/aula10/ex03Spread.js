// spread - é muito útil para "quebrar" um array

// function somar(x, y, z) {
//     return x + y + z;
// }
// const numeros = [10, 20, 30];

// console.log('Total..........: '+somar(...numeros));

// console.log('Maior número...... '+Math.max(...numeros));
// console.log('Menor número...... '+Math.min(...numeros));

let nome = 'William';
let sobrenome = 'Pantoja';
// com o spread operator, ele junta os dois
let nomeCompleto = [nome, sobrenome];
console.log(...nomeCompleto);

