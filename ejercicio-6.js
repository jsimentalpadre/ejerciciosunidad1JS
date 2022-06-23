/*
Ejercicio 6

Hacer un programa que nos diga si es Par e Inpar
1.- Ventana Promt
2.- Si no es valido que nos pida de nuevo el Numero

*/

while (isNaN(num)){
    var num = prompt("Dame cualquier numero: ");
}

if (num %2 == 0){
    document.write("El numero que escribió es par");
} else {
    document.write("El numero que escribió es inpar");
}