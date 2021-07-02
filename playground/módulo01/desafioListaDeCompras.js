// Desafio sobre ARRAYS
// Programação Imperativa - 11/06/2021

// defino o array usando uma palavra reservada, e coloco os itens entre colchetes[]
// nesse exemplo são apenas strings, mas cada tipo de dado uso a semântica adequada, se fosse numérico ou boolean não 
// usaria aspas, por ex.

let lista = ["arroz", "feijão", "ervilha", "PTS", "grão-de-bico", "granola", "alface americana", "cenoura", "tomate"];
//console.log(lista) //retorna os itens do array, um em cada linha
//console.log(lista[4]) // retorna o item 4 do array, no caso, grão-de-bico

// FUNÇÕES AUXILIARES OU MÉTODOS EM ARRAYS
// nomeDoArray.nomeDaFunçao(item);
// uso com o console.log()

//push -> insere itens no final do array
// lista.push("repolho");
// console.log(lista);

//pop -> remove itens do final do array, de onde eu especifiquei até o último
// lista.pop("tomate");
// console.log(lista);
//ou
//let listaSemTomate = lista.pop("tomate");
//console.log(listaSemTomate);

// unshift -> insere no início
// lista.unshift("brócolis");
// console.log(lista)

//shift -> remove do início
// lista.shift("arroz"); // brócolis era 0 e arroz era 1, removeu esses dois, ou eja, remove do início até o que eu especifiquei
// console.log(lista)

//indexof -> procura um item do início pro final e diz sua posição, se não estiver no array retorna como -1
//console.log(lista.indexOf("grão-de-bico"));

//lastindexof -> procura um item, do final para o início
//usar dentro do console.log
//console.log(lista.lastIndexOf("limão"));

// join -> une/retorna os itens em uma lista, for default separados por vírgula, mas posso definir outro separador nos ()
//colocar o método dentro do conole.log
console.log(lista.join(","));





