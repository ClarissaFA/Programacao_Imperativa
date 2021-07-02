// for (uso para criar loop)

for (i=0; i<=5; i++) {
  console.log(i)
  console.log('hello world')
  };

for (i=-2; i<=10; i+=2) { //i=i+2   -> começa no 1; para no 10, incrementa de 2 em 2
  console.log(i)
};

//------ declarei um função e dentro coloco o ofr
let tabuada = (numero) => {
      for (i=0; i<=10; i++) {
          console.log(`${i} x ${numero} = ${numero*i}`)  // usar sem o return, fez apenas uma vez
      }
};

tabuada('a');
tabuada(2);

// i é o que muda, o que aumenta a cada linha
//número é o número/nome da tabuada que estou calculando

console.log('-----------------')

//--------------TABUADA MAIS ELABORADA-------------

let tabuada2 = () => {
  for (i=1; i<=10; i++) {        // primeiro nº
    for (j=1; j<=10; j++) {      // segundo nº
      console.log(`${i} x ${j} = ${i*j}`)     // para o 1º nº mudar, tem que fazer toda a volta do 2º nº
    }    
  }
};

tabuada2();    // essa é sem parâmetros, ela só executa aquilo e ponto final.
