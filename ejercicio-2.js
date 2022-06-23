/*
Ejercicio 2

- Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
- hasta introducir un numero negativo y ahi mostrar el resultado
*/


var num = parseInt(prompt("Dame un numero a capturar cuantas veces: "));
var suma = 0;
var promedio = 0;
var cont = 0;

do{
    var num= parseInt(prompt("Dame un otro numero: "));
    console.log(num);
    suma += num;
    cont ++;
}while(num >=0)

promedio = suma/cont;

document.write("La sumatoria es: "+suma);
document.write("El promedio es: " + promedio);