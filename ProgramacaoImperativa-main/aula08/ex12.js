//É muito útil quando se precisa quebrar um array para passar seus valores para uma função ou construtor de um objeto como argumentos de valores separados. Serve principalmente como um atalho para unir 2 ou mais arrays independentes.
function somar(x, y, z) {
    return x + y + z;
  }
  
  const numeros = [1, 2, 3];
  
  console.log('Total:',somar(...numeros));

  
  //console.log(somar(numeros));  //não funcionaria
