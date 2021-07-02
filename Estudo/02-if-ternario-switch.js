// 29/06/2021 if, ternário, switch (são para dar instruções com condições)

//if
let qualBebida = function(estacao) {
    if (estacao == 'verao') {
        console.log('Beba água de coco!');
    }
    else if (estacao == 'inverno') {
      console.log('Beba chá de gengibre');
    } else {console.log('Beba o que preferir, mas se hidrate! :)')}
}

qualBebida('verao');
qualBebida('inverno');
qualBebida('bla');

//-------- ternário

let umaBebida = function(sede) {
  console.log(sede == 'muita' ? 'Beba muita água' : 'beba oq quiser')
}

umaBebida('muita');
umaBebida('nop');

//------- switch

let escolherRoupa = (dia) => {
      switch (dia.toLowerCase()){
      case 'segunda':
        return console.log('Use verde') //quando tem return não precisa break
      case 'terca':
        console.log('use azul')
        break; //aqui tem break pq não coloquei return
      case 'quarta':
        console.log('use branco')
        break;
      case 'quinta':
        return console.log('use preto')
      case 'sexta':
        console.log('use rosa')
        break;
      default: 
        console.log('selecione um dia da semana')
    }
};

escolherRoupa('segunda');
escolherRoupa('terca');
escolherRoupa('quarta');
escolherRoupa('Quinta');
escolherRoupa('SEXTA');
escolherRoupa('domingo');


//----------------
let escolherRoupa2 = (dia) => {
  dia == 'segunda' ? console.log('use preto') :
  dia == 'quarta' ? console.log('use azul') :
  dia == 'quinta' ? console.log('use vermelho') :
  dia == 'sexta' ? console.log('use laranja') : console.log('escreva um dia da semana')
}
escolherRoupa2('sabado');
escolherRoupa2('segunda');