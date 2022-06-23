/*
Ejercicio 7

Hacer un programa con las tabla(s) de multiplicar
1.- Para el Numero Introducido ( Ventana Promt)
2.- PLUS: Para todas las tablas de Multiplicar del 1 hasta el Numero Introducido

*/

var num = prompt("Dame un numero");

for (let c = 0; c<=10; c++){
    producto = num * c;
    document.write(`${num} x ${c} = ${num*c} <br>`);
}