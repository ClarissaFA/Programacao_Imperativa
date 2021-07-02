// Aula 04 - 08/06/2021
//exercício calculadora

let somar = function(n1,n2) {
    return n1+n2;
}
let subtrair = function(n1,n2) {
    return n1-n2;
}
let multiplicar = function(n1,n2) {
    return n1*n2;
}
let dividir = function(n1,n2) {
    //fazer condição para q n2 não seja == zero, pois isso daria erro no cálculo
    if(n2==0) {
        //executar se for true
        return 'Impossível fazer a divisão por 0';
    } else {
        return n1/n2;
    }
}
console.log(dividir(10,2));

//console.log(somar(10,10));
//console.log(subitrair(10,10));
//console.log(multiplicar(10,10));


// //exemplo livre
// let abracadabra = function(n3,n4) {
//     return n3-n4;
// }

// console.log(abracadabra(25,15));
