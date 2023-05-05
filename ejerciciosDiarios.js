const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'}
  ]

  function contarOvejas(ovejas) {
    let filtro1= ovejas.filter(oveja => oveja.name.includes('n'&& 'N') &&
    oveja.name.includes('a' && 'A'));
    let ovejasFiltradas = filtro1.filter(oveja => oveja.color == 'rojo')
    console.log(ovejasFiltradas)
  }