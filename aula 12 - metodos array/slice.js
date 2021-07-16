// aula 12 - 06/07/2021
// .slice() = fatia
// método que retorna os elementos selecionados da matriz
// sintaxe: array.slice(início, fim) 
//                  (inclusivo/exclusivo)
//fatia começando nesse e terminando antes daquele
// começa no primeiro e termina antes do segundo, ou seja, não inclui o segundo

const frutas = ['banana', 'laranja', 'limão', 'maçã', 'manga'];
//                 0          1         2        3       4
const citricas = frutas.slice(1,3);

console.log(citricas); //-> [ 'laranja', 'limão' ]
