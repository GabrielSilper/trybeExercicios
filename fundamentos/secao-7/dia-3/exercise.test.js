const functions = require("./exercise");

describe("Exercício 1", () => {
  it("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(functions.sum(4, 5)).toBe(9);
  });
  it("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(functions.sum(0, 0)).toBe(0);
  });
  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(()=>{functions.sum(4,'5')}).toThrow();
  });
  it('Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")', () => {
    expect(()=>{functions.sum(4,'5')}).toThrow('parameters must be numbers');
  });
});

describe("Exercício 2", () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado',()=>{
    expect(functions.myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]',()=>{
    expect(functions.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado',()=>{
    expect(functions.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe("Exercício 3", () => {
  it('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado',()=>{
    expect(functions.myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado',()=>{
    expect(functions.myFizzBuzz(18)).toBe('fizz');
  });
  it('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado',()=>{
    expect(functions.myFizzBuzz(25)).toBe('buzz');
  });
  it('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado',()=>{
    const num = 2;
    expect(functions.myFizzBuzz(num)).toBe(num);
  });
  it('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado',()=>{
    expect(functions.myFizzBuzz('Não é um número')).toBeFalsy();
  });
});



