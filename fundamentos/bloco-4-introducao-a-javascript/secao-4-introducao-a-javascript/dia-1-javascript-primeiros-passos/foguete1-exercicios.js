let angle1 = 30;
let angle2 = 90;
let angle3 = 65;

if (angle1 > 0  && angle2 > 0 && angle3 > 0 ){
    if((angle1+angle2+angle3)==180){
        console.log(true);
    }else{
        console.log(false);
    }
}else{
    
    console.log('Entrada de ângulo inválida, ou digitou um número negativo ou algo inválido como ângulo!');
}
