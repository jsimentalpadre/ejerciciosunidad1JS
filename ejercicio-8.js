/*
Ejercicio 8
Programar una Calculadora:
-Que pida dos numeros por pantalla
-Si se captura un numero mal ( algo no numerico ), que lo vuelva a pedir
- el resultado de Sumar, Restar, multiplicar y dividir esas dos cifras
- se debe mostrar en el cuerpo de la pagina , en una alerta y en la consola
*/

let r = 0;
const op = parseInt(prompt("Dame una opción: 1 es suma. 2 es resta. 3 multiplicacion y 4 division"));

while (isNaN(num1)){
    var num1 = parseInt(prompt("Dame el primer numero: "));
}

while(isNaN(num2)){
    var num2 = parseInt(prompt("Same el otro numero: "));
}


switch(op){
    case 1:
    r = num1 + num2;
    console.log(`${num1} + ${num2} = ${r}`);
    document.write("Revisa consola");
    break;

    case 2:
    r = num1 - num2;
    document.write(`${num1} - ${num2} = ${r}`);
    break;
    case 3:
        r = num1 * num2;
        alert(`${num1} - ${num2} = ${r}`);
    break;
    case 4:
        r = num1 / num2;
        document.write(`${num1} / ${num2} = ${r}`);
    break;

}

