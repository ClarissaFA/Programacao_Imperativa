// aula 12 - 06/07/2021
// .flat() = achatar
// método feito para 'desembrulhar' sub-arrays dentro de arrays (array bidimencional)
// não modifica o array original
// pode ter parâmetro, o depth, que diz o nível de profundidade para achatar o array
// també, remove espaços vazios no array

let arr1 = [1,2,[3,4]];
// novoArr1 = arr1.flat();
// console.log(novoArr1);
console.log(arr1.flat());                  //-> [ 1, 2, 3, 4 ]

let arr2 = [1,2,[3,4,[5,6]]];
console.log(arr2.flat());                  //-> [ 1, 2, 3, 4, [ 5, 6 ] ]
console.log(arr2.flat(2));                 //-> [ 1, 2, 3, 4, 5, 6 ]

let arr3 = [1,2,[3,4,[5,6,[7,8]]]];
console.log(arr3.flat());                  // -> [ 1, 2, 3, 4, [ 5, 6, [ 7, 8 ] ] ]
console.log(arr3.flat(2));                //-> [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]
console.log(arr3.flat(3));               //-> [ 1, 2, 3, 4, 5, 6, 7, 8 ]
console.log(arr3.flat(Infinity));       //-> [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let arr4 = [1,2, ,4,5];
console.log(arr4.flat());             //-> [ 1, 2, 4, 5 ]

//--------------
var arr1 = [1, 2, 3, 4];

arr1.map(x => [x * 2]);
// [[2], [4], [6], [8]]

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

//  Só o primeiro nível
arr1.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]


//-------------------
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x=>x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]









//let numeros = [1,2,3,[4,5,6],[7,8],[9,10],[10,11]];
// console.log(numeros);               //->[ 1, 2, 3, [ 4, 5 ] ]
// novoArray = numeros.flat(2);
// console.log(novoArray);            //-> [ 1, 2, 3, 4, 5 ]

//console.log(numeros.flat())
//console.log(numeros.flat(2))
