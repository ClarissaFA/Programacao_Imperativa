//ex04.js


let multiplo = (a, b) => {
let resto = a % b; // Obtemos o resto da divisão.
return resto == 0; // Se o resto for 0, é múltiplo
};
console.log(multiplo(2,2));
if(multiplo(2,2)==true){
    console.log("É MULTIPLO")
} else {
    console.log("NÃO É MULTIPLO")
}

