const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      console.log(`${ifScope}. Ótimo, fui utilizada no escopo`);
    } else {
      let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
      console.log(elseScope);
    }
  }
  testingScope(true);