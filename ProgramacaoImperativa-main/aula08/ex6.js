//construtor - vamos criar um método construtor para o objeto gato, é uma espécie de modelo.Associar à propriedade o que estamos recebendo como parâmetro
//MOLDE PARA CRIAR OBJETOS
function Gato(nome,idade,sexo,cor) {
    this.nome=nome;
    this.idade=idade;
    this.sexo=sexo;
    this.cor=cor;
    //atenção no construtor quando for função*******
    this.comportamento= function() {return 'A '+this.nome+' é muito brincalhona'};
}
//criar um objeto a partir do construtor -
//INSTANCIAR - OBJETOS
let gato = new Gato('Tiffany',11,'fêmea','marrom');
let gato1= new Gato('Daphne',11,'fêmea','branca');

console.log(gato1);
console.log(gato.nome);
console.log(gato1.comportamento());
