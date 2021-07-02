// estudo de funções pelo material do playground

function dobro(umNumero) {
    return umNumero * 2;
    }
console.log(dobro(6))


//função declarada
function darOi() {   //tem q ter os parênteses, mesmo sem parâmetros, para ela funcionar
    console.log("Olá, tudo bem?");
}
darOi(); // imprime Olá, tudo bem?
darOi();


//função expressa - usa uma variável e o nome da variável é a função
let somar = function(){
    console.log(1+1);
};
somar() //imprime 2

let multiplicar = function(numA, numB){
    console.log(numA * numB);
};
multiplicar(2,4); // imprime 8

//guardar resultado em uma variável
let resultado = multiplicar(2,3); // imprime 6
console.log(resultado); // imprime undefined, porque ela não retorna nada, não está definido isso

//definindo um retorno
let subtração = function(numA, numB){
    return numA - numB
};
subtração(10,2); // não imprime nada, pois a função está retornando o resultado

console.log(subtração(10,5)); // imprime 5

//posso colocar o retorno dentro de uma variável
let subtrai = subtração(10,3);
console.log(subtrai); // imprime 7


