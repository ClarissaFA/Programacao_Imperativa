// Aula 04 - 08/06/2021
// Condicional Simples/Composta

let login = "cfare";
let senha = 123;
let acesso = true;

if (login == "cfare") {
    console.log("Acesso permitido")
} else {
    console.log("Acesso negado")
};

//-------------------------------------
//if composto

if(login == "cfare" && senha === 123 && acesso == true) {
    console.log("Acesso permitido")
} else {
    console.log("Acesso negado")
};

// com == é igual
// com === é idêntico, ou seja, conteúdo e tipo (no caso, string ou number)
// colocando senha = "123" as aspas, senha deixa de ser tipo number e vira tipo string, aí não fica idêntico
