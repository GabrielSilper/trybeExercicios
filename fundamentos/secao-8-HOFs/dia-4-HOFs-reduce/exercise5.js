const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    return names.map ( elem => {
        return elem.split('').filter( elem => elem === 'a' || elem === 'A');
    }).reduce((cum, curr) => {
        return cum+= curr.length;
    }, 0);
  }

  console.log(containsA());