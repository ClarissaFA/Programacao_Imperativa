let idade = 25; //valor inicial

function alteraIdade() {
    idade++;  
    console.log(idade);
    return idade;  //criar um loop 
    //cada vez que a variável adquire um novo valor, ela assume esse valor
}

console.log (idade)
alteraIdade();
alteraIdade();
alteraIdade();
alteraIdade();
alteraIdade();
alteraIdade();

//<variável>++ significa idade = idade + 1
//Ou, no caso <variável> = <variável> + 1

//Pra vc adicionar outros valores além de +1
//Você tem que escrever a linha assim: idade = idade + valor
