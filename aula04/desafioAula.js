// aula 04 - 08/06/2021
// desafio aula 

//1º definir os parâmetros

function podeSubir(altura,acompanhada) {
    if(altura >=1.40 && altura <=2) {
        return true;
    } else if (altura >1.20 && acompanhada==true) {
        return true;
    } else return false;  
}
let altura2 = 130;
let subiu = podeSubir(altura2,true);
console.log(subiu);
