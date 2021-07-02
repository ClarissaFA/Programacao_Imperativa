// Aula 06 - 09/06/2021
// Repetições - For

exibirTipo(100);
function exibirTipo(limite) {
    for(let i=0; i<=limite; i++) {
        if(i%2 != 0) {  // o resto de i/2 é diferente de zero?
            console.log(i+ " ÍMPAR");
        }
        else {
            console.log(i+ " PAR");
        }
    }
}



function tipo(limite) {
    for (i=0; i<=limite; i++) {
        if (i%2 ==0) {   // o resto de i/2 é igual a zero?
            console.log('o número '+i+' é PAR')
        }
        else {
            console.log('o número '+i+' é IMPAR')
        }
    }
}

tipo(40)
