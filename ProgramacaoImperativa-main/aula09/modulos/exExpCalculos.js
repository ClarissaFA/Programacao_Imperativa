//Aula 09 - 21/06/2021
//Dentro da pasta Modulos
//exExpCalculos.js

module.exports.somar=(a,b)=>a+b; 
module.exports.subtrair=(a,b)=>a-b;
module.exports.multiplicar=(a,b)=>a*b;

module.exports.dividir=(a,b)=>{
    if(b!=0) {
        return a/b;
    } else {
        return 'Impossível dividir por Zero';
    }
}


