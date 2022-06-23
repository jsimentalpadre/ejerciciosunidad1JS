/*
Ejercicio 4

- Mostrar todos los numeros IMPARES Que esten entre dos numeros introducidos por el usuario
*/

var num1 = prompt("Dame un numero: ");
var num2 = prompt("Dame otro numero: ");

for (var c = num1; c <= num2; c++){
    if(c%2 !=0){
        document.write(c);
    }
}