// declarar função tradicionalmente:
//const somar = function () {}

// declarar função de forma abreviada, com arrow function
// mito a palavra function mas deixo paresteses vazio e após ele coloco a arrow
const somar = () => {
    console.log("estou em uma arrow function, não usei a palavra declarada") 
}; 
somar(); // estou em uma arrow function, não usei a palavra declarada

// para abreviar ainda mais, como é só uma linha, não preciso das chaves{}
const dividir = ()=> console.log('abreviei ainda mais minha arrow function ao não usar chaves');
dividir();  // abreviei ainda mais minha arrow function ao não usar chaves

// se for uma função com apenas um parâmetro, nem sequer precisos dos parênteses()
const multiplicar = numero => console.log('arrow function de um parâmetro é sem parênteses e recebi um número ' + numero);
multiplicar();  // arrow function de um parâmetro é sem parênteses e recebi um número undefined
multiplicar(15);  // arrow function de um parâmetro é sem parênteses e recebi um número 15

//com dois parâmetros ou mais necessita do parênteses
const queroComer = (comida1, comida2) => console.log('fome de '+comida1+' e '+comida2); // muito importante colocar o sinal + para construir a frasequeroComer('arroz', 'feijão');  // fome de arroz e feijão

const somar2 = (numA, numB) => console.log("recebi um número: "+numA+" e "+numB)
somar2(20, 30);  // recebi um número: 20 e 30

const taFrio = (a, b) => console.log("tá tão frio que preciso de um "+a+" e "+b);
taFrio("chocolate quente com leite de amendoim", '3 cobertores'); // tá tão frio que preciso de um chocolate quente com leite de amendoim e 3 cobertores


// se vou usar um return, aí preciso colocar as chaves
const somar3 = (numA, numB) => {
    console.log("recebi os números: "+numA+" e "+numB+", sua soma é: ")
    return numA+numB
};
console.log(somar3(2,4)); // recebi os números: 2 e 4, sua soma é: 6

