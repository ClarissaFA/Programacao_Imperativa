//desestruturar==> extração de valores de um objeto  ou array
//a desestruturação NÃO MODIFICA o objeto ou array original

//array frutas
let frutas=['Morango','Manga','Limão'];
let nomeFruta=frutas[0];   //desestruturando e armazenando 1 nome de fruta
console.log(nomeFruta);
 
//desestruturando todo o array de frutas
//no caso de ARRAY as variáveis são envolvidas por COLCHETES
let [fruta1, fruta2, fruta3]= frutas;
fruta3='bla bla bla';
console.log(fruta3.toUpperCase());

