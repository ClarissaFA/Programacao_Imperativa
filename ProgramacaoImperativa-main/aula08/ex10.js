//spread operator (...) operador de propagação
//   ...variável (pode ser array, string ou objeto)


//spread operator em string
let nome='Silvia';
let sobrenome='Fiacador';


//com o spread operator ele junta os dois num só
let nomeCompleto = [...nome, ...sobrenome];
//ele coloca em forma de array dentro de array
let nomeCompleto1 = [nome,sobrenome];
console.log(nomeCompleto);
console.log(nomeCompleto1);