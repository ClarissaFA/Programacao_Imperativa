// aula 09 módulos
// fora da pasta módulos

let calculadora = require('./modulos/ex04ExportCalculadora');

console.log(calculadora(2,3,'*')); // 6
console.log(calculadora(2,3,'+')); // 5
console.log(calculadora(2,3,'-')); // -1
console.log(calculadora(2,0,'/')); // Na divisão o denominador deve ser diferente de zero
console.log(calculadora(2,3,'/')); // 0.6666666666666666

console.log('---------------------------------')

for (teste='K'; teste.length <= 7; teste+='K');
console.log(teste);

for (line='#'; line.length <=7; line+='#')
console.log(line);

for (ass='@'; ass.length<8; ass+='@')
console.log(ass);

