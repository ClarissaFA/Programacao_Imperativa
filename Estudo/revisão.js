let oQueComer = turno => {
  switch (turno.toLowerCase()) {
    case 'manhã':
      console.log('café com pão')
      console.log('café com pão')
      console.log('café com pão, blablabla maquinista, maria fumaça')
      break
    case 'meioDaManha':
      console.log('bolacha')
      break
    case 'almoco':
      return console.log('arroz com feijão')
    case 'tarde':
      return console.log('bolo')
    case 'noite':
      console.log('sopaaa')
      break
    default:
      console.log('eita fome')
  }
}

oQueComer('manha');
oQueComer('manhã');
