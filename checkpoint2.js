// checkpoint 2 - 02/07/2021 - menu para microondas
// declarei as variáveis
let opcao = [1, 2, 3, 4, 5];
let comida = ['pipoca', 'macarrao', 'carne', 'feijao', 'brigadeiro'];
let tempoPadrao = [10, 8, 15, 12, 8];

//fiz a relação entre elas transformando em propriedades de um objeto
let opcoes = [
  {numero: 1,
  comida: 'pipoca',
  tempoPadrao: 10},

  {numero:2,
  comida: 'macarrao',
  tempoPadrao: 8
  },

  {numero:3,
  comida: 'carne',
  tempoPadrao: 15
  },

  {numero:4,
  comida: 'feijao',
  tempoPadrao: 12
  },

  {numero:5,
  comida: 'brigadeiro',
  tempoPadrao: 8
  },
]


//fazer a função e colocar as condições
let ligar = (menu, tempo) => {
  let prato = opcoes[menu-1]     // nova variável para conferir que foi selecionada uma opção do menu e trabalhar com as condições. (menu-1) é pq o índice do array começa em zero, aí o menos um arruma para se equivaler ao índice
      if (!prato) {   // condição para verificar que foi escolhido um prato que está no menu
      return 'Prato inexistente';
    } else if (tempo > (3*prato.tempoPadrao)) {   
      return 'Kabum!';    // a 1ª verificação deve ser a maior, pois se algo é 3x maior também vai ser 2x maior, então tem q ser primeiro pois se não o código vai verificar que é 2x maior e não vai seguir verificando a segunda condição, 3x maior
    } else if (tempo > (2*prato.tempoPadrao)) { 
      return 'Que pena, sua comida queimou :(';
    } else if (tempo < prato.tempoPadrao) {
      return 'Tempo insuficiente';
    } else {return 'Prato pronto, bom apetite :)'} 
}

// testes para conferir que está funcionando corretamente:
console.log(ligar(1)); // opção do menu -> Prato pronto, bom apetite :) 
console.log(ligar(2));
console.log(ligar(3));
console.log(ligar(4));
console.log(ligar(5));
console.log(ligar(6)); // opção que não está no menu -> Prato inexistente
console.log(ligar(1, 5)); // tempo menor do que o tempo padrão -> Tempo insuficiente
console.log(ligar(1, 31)); // tempo maior do que 3x o tempo padrão -> Kabum!
console.log(ligar(1, 21)); // tempo maior do que 2x o tempo padrão -> Que pena, sua comida queimou :(




