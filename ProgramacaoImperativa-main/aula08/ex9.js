//spread operator (...) operador de propagação
//   ...variável (pode ser array, string ou objeto)


//spread operator em arrays
let frutasVermelhas=['Morango','Cereja','Melancia'];
let frutasAmarelas=['Melão','Damasco','Pêssego'];
let frutasVerdes=['Limão','Abacate'];

//com o spread operator ele junta os dois num só
let frutas = [...frutasVermelhas, ...frutasAmarelas];
//ele coloca em forma de array dentro de array
let frutas1 = [frutasVermelhas,frutasAmarelas];
console.log(frutas);
console.log(frutas1);