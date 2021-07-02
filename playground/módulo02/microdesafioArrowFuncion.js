// Microdesafio Arrow funcions

// função com sintaxe tradicional
function print(mensagem) {
    console.log(mensagem)
};
print("Olá, bom dia");

//função com sintaxe simplificada com uma arrow function
let answer = () => console.log("Bom dia para você também"); // porque não funcionou com function? tive que substituir funciton por let
answer();

function soma(n1,n2){
    return n1+n2
};
console.log(soma(10,10));

let piadinha = (n1,n3) => console.log("me dá "+n1+" que te dou "+n3);
piadinha(10,20);

// function nomeCompleto(nome, sobrenome) {
//     return nome +' '+sobrenome
// };

// function bomDia(nome, sobrenome, callback) {
//     return 'Olá, '+ callback(nome, sobrenome)
// };

// bomDia('Amanda', "Ferreira", nomeCompleto);