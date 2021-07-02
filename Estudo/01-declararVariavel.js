// posso declarar a variável sem atribuir um valor
// e atribuir o valor depois, aí não precisa a palavra reservada
// ou já faço os dois juntos, mas as vezes pode ser útil não atribuir de cara
// uso let var e const

let minhaVariavel;  //declarei
minhaVariavel = "oie"  //atribui
console.log(minhaVariavel);

//----------- ARRAY

let nomes = ["Helena", "Clarissa", "Débora"]

console.log(nomes); // -> [ 'Helena', 'Clarissa', 'Débora' ]
console.log(nomes[1]); // -> Clarissa  
// para chamar pela posição, eu tenho q colocar dentro do parenteses o nome da função e entre chaves o número do item

let ola = "Hi";
let gurias;
gurias = "girls";

console.log(ola + " " + gurias);
console.log(`${ola} ${gurias}`); // -> Hi Helena,Clarissa,Débora

console.log(ola + " " + nomes); // -> Hi Helena,Clarissa,Débora
console.log(ola + " " + nomes[2]); // -> Hi Débora

console.log(`${minhaVariavel} ${nomes.join(", ")}. Sejam bem-vindas`);
// usar .join("-") permite que eu determine o separador de minha escolha para separar os itens do array

console.log(ola + " " + nomes[0] + ", " + nomes[1] + " e " + nomes[2] + "! Welcome " + gurias); // -> Hi Helena, Clarissa e Débora! Welcome girls

console.log(`${ola} ${nomes[0]}, ${nomes[1]} e ${nomes[2]}! Sejam bem-vindas, ${gurias}!`); // -> Hi Helena, Clarissa e Débora! Sejam bem-vindas, girls!

//---------BRINCAR COM O ARRAY = métodos
// pensar em uma lista de compras num app, vai incluir ou remover pelo final, pop e push são os q mais vai usar
let frutas = ["morango", 'laranja', 'ameixa'];
//----PUSH
frutas.push('amora'); // push coloca mais um elemento (no final)
console.log(frutas); // -> [ 'morango', 'laranja', 'ameixa', 'amora' ]
frutas.push('melancia');
console.log(frutas); // -> [ 'morango', 'laranja', 'ameixa', 'amora', 'melancia' ]

//-----POP
frutas.pop(); // remove o último elemento, não precisa escrever nada no (parâmetro)
console.log(frutas); // -> [ 'morango', 'laranja', 'ameixa', 'amora' ]

//----UNSHIFT
frutas.unshift('limão'); // inclui um elemento no início
console.log(frutas); // -> [ 'limão', 'morango', 'laranja', 'ameixa', 'amora' ]

//-----SHIFT
frutas.shift() // remove o elemento do início do array, o primeiro elemento
console.log(frutas); // -> [ 'morango', 'laranja', 'ameixa', 'amora' ]

//----substituir no array
frutas[3] = 'mamão';
console.log(frutas); // -> [ 'morango', 'laranja', 'ameixa', 'mamão' ]


//--------------------------------------
console.log('----------------------------------------------------------');

function somar (umNumero, outroNumero) {
  return umNumero + outroNumero;
};

let compraDaHelena = somar(2,3); // guardei o resultado aqui
console.log(compraDaHelena) // -> 5

let subtrair = function (umNumero, outroNumero) {
  return umNumero - outroNumero;
};



// exercício
//declarar a variável frutas, sem Itens, vai ser Array
//usar push colocar itens lá
// declarar outro para cores e usar push para inserir os itens
//etapa 2
// fazer console.log para declarar que tal fruta tem tal cor, usando o método novo para escrever
// usar push e pop para modificar e incluir

console.log('-----------------------------------------------');
let frutas2 = [];
frutas2.push('banana', 'mamão', 'morango');
console.log(frutas2);

let cores = [];
cores.push('amarelo', 'laranja','vermelho');
console.log(cores);

//jeito 1
console.log(`${frutas2[0]} tem a cor ${cores[0]}`); //-> banana tem a cor amarelo

//jeito 2
function frases(frutas2, cores) {
  console.log(`${frutas2} tem a cor ${cores}`)
}

frases(); //-> undefined tem a cor undefined pois não declarei as variáveis
frases(frutas2[1], cores[1]); //-> mamão tem a cor laranja
frases(frutas2[2], cores[2]); //-> morango tem a cor vermelho


//----------------------
console.log('---------------------------------------------')
let dividir = (numA, numB) => numA / numB;   //sem {} é como se o return estivesse implícito
// de resto eu uso {} e aí coloco return
console.log(dividir(6,3)); 

