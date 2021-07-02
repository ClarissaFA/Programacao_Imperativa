let num1=10;
var num2=20;
const num3=100;
num1+=num3;
num2%=5;
num2*=num3;
num1++;
num2--;
console.log('num1=',num1); // 111
console.log('num2=',num2); // -1
console.log('num3=',num3); // 100


//condicionais - if ternário
let idade=18
console.log(idade >= 18 ? "maior de idade" : "menor de idade")
           //condição   ? if verdadeiro    : else falso

let salario = 6000.00
console.log(salario >= 5000.00 ? "aumento de 5%" : "aumento de 10%")

console.log(salario>=5000.00 ? salario=salario+salario*0.05 : salario=salario*0.1) 
// sintaxe correta, imprime 6300 que corresponde ao salario de 6000 + 5% de aumento = 6300.00

console.log(salario>-500.00 ? salario+=salario*0.05 : salario+=salario*0.1)


//array
let frutas=['banana', 'maça', 'pêra', 'uva', 'mamão', 'laranja', 'tangerina', 'caqui'];
//tamanho do array = 8
//nome do aray = frutas
//fruta de índice 7 = caqui
//fruta de índice 2 = pêra
//indíce de banana = 0

//console.log(frutas.pop()); // pop é para retirar o último elemento do array
//console.log(frutas.join()); // nothing, join é para unir todos os itens em uma string
//console.log(frutas.includes('banana')); // é para saber se o array contem tal elemento
console.log(frutas.push('morango', 'melancia')); //inclui um novo elemento no array e imprime o novo número de MediaElementAudioSourceNode, ou seja, retornou 9
//console.log(frutas.lastIndexOf('morango', 'melancia')); // imprime o índice do elemento procurado
//frutas.unshift

//inclui duas frutas com o push, tamanho do array = 10

console.log(frutas.unshift('caju')) // incluiu caju no início
//novo tamanho do array é 11

//--------------------------------------------------------------------------------------

function calcular(numA, numB, operacao) {
    if (operacao=='+') {
        return numA+numB;
    }
    if (operacao=='-') {
        return numA-numB;
    }
    if (operacao=='*') {
        return numA*numB;
    }
    if (operacao=='/' && numB!=0) {
        return numA/numB;
    }
    else {
        return 'impossível dividir!';
    }
}

//let resultado = calcular(12, 0, '/');
//console.log('resultado = '+resultado); // resultado = impossível dividir!

let resultado = calcular('2', 5, '+');
console.log('Resultado = ' + resultado); // resultado = 25
// se usar 2 sem aspas simples fica resultado = 7, o que pra mim tem lógica. Não entendi o uso das aspas no número 2
//ao combinar dados diferentes, js considera como string (cmapo mais amplo = mais seguro)
//+ funciona com números e com strings, string é mais amplo, então ele retorna como string pois tem mais chances de ser oq eu queria
// * só funciona com números, então ele já entende que é número e faz a multiplicação
