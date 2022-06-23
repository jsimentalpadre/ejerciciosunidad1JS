/*
Ejercicio 1
- Programa que pida dos numeros y que nos diga cual es mayor , cual menor y si son iguales
- PLUS: Si los numeros no son numeros o son menores o iguales a cero, nos los vuelva a pedir
*/

let num1 = prompt("Dame un numero");
let num2 = prompt("Dame otro numero");

if(num1>num2){
    document.write("Numero 1 es mayor que numero 2");
}else if(num1==num2){
    document.write("Ambos numeros son iguales");
} else if(num1<num2){
    document.write("numero 1 es menor que numero 2");
}