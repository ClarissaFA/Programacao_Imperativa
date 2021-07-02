//objetos literais

let carro= {
placa: 'DRU2258',
cor: 'preta',
ano: 2021, 
flex: true,
mostra: function() {
    return 'Características do seu carro:\nPlaca='+ carro.placa+'\nCor='+carro.cor+'\nAno='+carro.ano+'\nTotalflex='+carro.flex;
}};


//acessando o objeto
console.log(carro.mostra());

