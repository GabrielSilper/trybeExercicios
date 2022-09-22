salarioBruto = 3000;
let inss;
let impostoRenda;

//calculando o inss
if (salarioBruto<=1556.94) {
    inss=salarioBruto*0.08;
    console.log(inss);
}else if (salarioBruto>1556.94 && salarioBruto<=2594.92) {
    inss=salarioBruto*0.09;
    console.log(inss);
}else if (salarioBruto>2594.93 && salarioBruto<=5189.82) {
    inss=salarioBruto*0.11;
    console.log(inss);
}else if (salarioBruto>5189.82) {
    inss=570.88;
    console.log(inss);
}else{
    console.log(false);
}

//tirando o inss do valor bruto
salarioBruto-=inss;
console.log(salarioBruto);

//calculando o Imposto de Renda
if (salarioBruto<=1903.98) {
    console.log("Isento de imposto de renda");
}else if (salarioBruto>1903.98 && salarioBruto<=2826.65) {
}else if (salarioBruto>2826.65 && salarioBruto<=3751.05) {
}else if (salarioBruto>5189.82) {
}else{
    console.log(false);
}