/*
Ejercicio 5
- Un programa que muestre todos los numeros DIVISORES de un numero que proporcione el usuario
- Los divisores son los números que se consiguen al dividir a otro de manera exacta, es decir, el residuo de la division es CERO
*/
'use-strict'
var num = prompt("Dame un numero para saber el divisor: ");

for (var c = 0; c <=num; c ++){
    if(num%c == 0){
        document.write("<p>El numero " +num+" se puede dividir por : "+c+" veces");
    }
}