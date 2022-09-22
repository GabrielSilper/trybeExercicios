salarioBruto = 3000;
let inss;
let impostoRenda;
let salarioDescontado;
let salarioLiquido;

console.log('Seu salário bruto é de: ',salarioBruto);

//calculando o inss
if (salarioBruto<=1556.94) {
    inss=salarioBruto*0.08;
    console.log('Você paga '+inss+' de INSS.');
}else if (salarioBruto>1556.94 && salarioBruto<=2594.92) {
    inss=salarioBruto*0.09;
    console.log('Você paga '+inss+' de INSS.');
}else if (salarioBruto>2594.93 && salarioBruto<=5189.82) {
    inss=salarioBruto*0.11;
    console.log('Você paga '+inss+' de INSS.');
}else if (salarioBruto>5189.82) {
    inss=570.88;
    console.log('Você paga '+inss+' de INSS.');
}else{
    console.log(false);
}

//tirando o inss do valor bruto
salarioDescontado=salarioBruto-inss;

//calculando o Imposto de Renda
if (salarioDescontado<=1903.98) {
    console.log("Isento de imposto de renda");
}else if (salarioDescontado>1903.98 && salarioDescontado<=2826.65) {
    impostoRenda= (salarioDescontado*0.075)-142.80;
}else if (salarioDescontado>2826.65 && salarioDescontado<=3751.05) {
    impostoRenda= (salarioDescontado*0.15)-354.80;
}else if (salarioDescontado>3751.05 && salarioDescontado<=4664.68) {
    impostoRenda= (salarioDescontado*0.225)-636.13;
}else if (salarioDescontado>4664.68) {
    impostoRenda= (salarioDescontado*0.275)-869.36;
}else{
    console.log(false);
}

salarioLiquido=salarioDescontado-impostoRenda;
console.log('Seu salário descontado INSS é de: ',salarioDescontado);
console.log('Você paga '+impostoRenda+' de imposto de renda.');
console.log('Seu salário líquido é de: ',salarioLiquido);
console.log(salarioLiquido-(salarioBruto*0.17));