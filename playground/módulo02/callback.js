const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(10,20,somar));

console.log(calculadora(10,20, (numeroA, numeroB) => numeroA - numeroB));

// MICRODESAFIO
//Crie uma função acaoCarro(), que receberá uma callback como parâmetro.
//Após isso, crie duas funções: andar() – deve exibir uma mensagem dizendo 
//que o carro está andando – e parar() – deve exibir uma mensagem dizendo 
//que o carro parou.
//Execute ambas as ações utilizando a função acaoCarro(), passando suas ações 
//como callbacks.

const acaoCarro = () => console.log()


let quintaFeira = () =>