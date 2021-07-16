// aula 12 - 06/07/2021
// .slice() = emendar
// array.splice(início, quantidade, item1, item2, ...);
// quantidade é opcional e deve ser número inteiro (que vai ser eliminado do array)
// itens são os elementos que quero incluir no array, no lugar dos q eu exclui

const frutas = ['banana', 'laranja', 'limão', 'maçã', 'manga'];
//                 0          1         2        3       4
console.log(frutas);

frutas.splice(2,0, 'novaFruta1', 'novaFruta2', 'novaFruta3', 'novaFruta4');
console.log(`lista com adição: ${frutas}`);