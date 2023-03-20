//Imprimir numeros del 1 - 10
console.log("Numeros del 1 al 10")
for (let i = 1; i <= 10; i = i + 1){
    console.log(i);
}
//Imprimir numeros pares del 2 al 20
console.log("Numeros pares: ")
for (let i = 1; i<=20; i = i + 1){
    if (i % 2 == 0){
        console.log(i);
    }
}
//Imprimir impares del 1 al 19
console.log("Numeros impares: ")
for (let i = 1; i<=20; i = i + 1){
    if (i % 2 != 0){
        console.log(i);
    }
}
//Imprimir numeros del 10 al 1 en orden inverso
console.log("orden inverso: ")
for (let i = 0; i < 10; i = i + 1){
    console.log(10 - i);
}
//Imprime los números del 1 al 10, pero se detiene al llegar al 5
console.log("1 al 10 pero se detiene al 5")
for (let i = 1; i <= 10; i = i + 1){
    if (i <= 5){
        console.log(i);
    }
}
//Imprime los números del 1 al 10, pero salta el 5
console.log("1 al 10 pero salta el 5")
for (let i = 1; i <= 10; i = i + 1){
    if (i == 5){
        i = 6;
    }
    console.log(i);
}
//Crea una función llamada decirNombre(nombre) y nos ejecute una alerta “Hola “ + nombre
decirNombre = (nombre) =>{
    alert("Hola " + nombre);
}
decirNombre("Juan");
//Crea una función llamada saludar(nombre) y nos devuelva un  string  “Hola “ + nombre y luego invoca la función dentro de una alerta
saludar = (nombre) => {
    return "Hola " + nombre;
}
alert(saludar("Manolo"));
//Crea una función llamada sumar(a,b) y nos devuelva la suma de a y b
sumar = (a, b) => a + b;
//Crea una función llamada restar(a,b) y nos devuelva la resta de a y b
restar = (a, b) => a - b;
/*
Crea una función llamada calcular(operación,a,b) y dependiendo de si la operación es “+” o “-”
invocar la función sumar(a,b) o restar(a,b) (retornar el resultado), en caso de recibir una 
operación no válida devolver null 
*/
const calcularOperacion = (operacion, a, b) =>{
    if(operacion == "+"){
        return sumar(a, b);
    }else if (operacion == "-"){
        return restar(a, b);
    }else{
        return null;
    }
}
//Crea una función llamada contarHasta(número) y nos cuente hasta ese número por consola
const contarHasta = (numero) =>{
    for (let i = 0; i<= numero; i = i + 1){
        console.log(i);
    }
}
/*
Pregúntale al usuario si desea usar la calculadora, mientras su respuesta sea “SI” ejecutaras el siguiente algoritmo. 
Solícita al usuario un número, otro número y una operación, luego con los valores ingresados ejecuta la función calcular 
para mostrar el resultado por alerta. Una vez hecho esto se volverá a preguntar al usuario si quiere volver a usar la 
calculadora. Si escribe algo distinto de sí, el programa nos dirá por alerta “El programa ha finalizado”.
*/
let respuesta = prompt ("¿Desea usar la calculadora?", "");
while (respuesta == "si") {
let a = prompt("ingrese un primer valor", "");
let b = prompt("ingrese un segundo valor", "");
let operar = prompt("ingrese una operacion", "");
alert(calcularOperacion(operar, parseInt(a), parseInt(b)));
respuesta = prompt("¿Desea volver a usar la calculadora?", "")
}
if (respuesta != "si") {
    alert("el programa ha finalizado");
}

/*
Hacer  un programa que imprima 25 términos de la serie 11 - 22 - 33 - 44–55-66…..
*/

/*
let contador = 0;
for (let i = 0; i < 25; i = i + 1){
    contador = contador + 11;
    console.log(contador);
}
*/


/*hacer  un programa que permita cargar 5 números enteros y luego nos informe cuántos valores fueron pares 
y cuántos impares, se ingresan valores por teclado.
*/


/*
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < 5; i = i + 1){
        let num = prompt("Ingrese un numero", "");
        if(num % 2 == 0){
            pares = pares + 1;
        }else{
            impares = impares + 1;
        }
    }
alert("usted ingresó " + pares + " numeros pares y " + impares + " numeros impares");
*/


/*
hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. 
Mostrar la altura promedio de las personas. 
*/
//Opcion para no usar un array.push(), sin guardar los datos ingresados

/*
let alturaSuma = 0;
for (let i = 0; i < 5; i = i + 1){
    altura = prompt("ingrese la altura en metros", "");
    alturaSuma = alturaSuma + parseFloat(altura);
}

*/
//console.log("El promedio de alturas ingresado es: " + alturaSuma / 5 + " mts");

/*
Se cuenta con la siguiente información:
	Las edades de 5 estudiantes del turno mañana.
	Las edades de 6 estudiantes del turno tarde.
	Las edades de 11 estudiantes del turno noche.
Las edades de cada estudiante deben ingresarse por teclado.
a)	Obtener el promedio de las edades de cada turno (tres promedios).
b)	Imprimir dichos promedios (promedio de cada turno).
c)	Mostrar por pantalla un mensaje que indique cual de los tres turnos tiene un promedio de edades mayor.

*/


/*
let promMañana = 0;
let promTarde = 0;
let promNoche = 0;

ingresaEdad = (iterar, turno) =>{
    let promedio = 0;
    for (let i = 0; i < iterar; i = i + 1){
        let edad = prompt("Ingrese edad de turno " + turno, "");
        promedio = promedio + parseInt(edad);
    }
    return promedio / iterar;
}
promMañana = ingresaEdad(3, "mañana");
promTarde = ingresaEdad(3, "tarde");
promNoche = ingresaEdad(3, "noche");
console.log("Promedio de edades turno mañana: " + promMañana);
console.log("Promedio de edades turno tarde: " + promTarde);
console.log("Promedio de edades turno noche: " + promNoche);

if (promMañana > promTarde && promMañana > promNoche){
    console.log("El turno mañana tiene el promedio mas alto");
}else if (promTarde > promMañana && promTarde > promNoche){
    console.log("el turno tarde tiene el promedio mas alto");
}else if (promNoche > promMañana && promNoche > promTarde){
    console.log("El turno noche tiene el promedio mas alto")
}else{
    console.log("Hay dos o mas promedios iguales");
}

*/



/*
Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
a)	La cantidad de valores negativos ingresados.
b)	La cantidad de valores positivos ingresados.
c)	La cantidad de múltiplos de 15.
d)	El valor acumulado de los números ingresados que son pares.
*/


/*
let valorIngresado;
let negativo = 0;
let positivo = 0;
let multiplos15 = 0;
let valoresPares = 0; 

for (let i = 0; i < 10; i = i + 1){
    valorIngresado = parseInt(prompt("Ingrese un valor (positivo o negativo)", ""));
    if (valorIngresado % 2 == 0){
        valoresPares = valoresPares + 1;
    }
    if (valorIngresado < 0){
        negativo = negativo + 1;
    }else {
        positivo = positivo + 1;
    }
    if (valorIngresado % 15 == 0){
        multiplos15 = multiplos15 + 1;
    } 
}

console.log("Usted ingresó " + negativo + " valores negativos, " + positivo + " valores positivos, " + multiplos15 + " multiplos de 15 y " + valoresPares + " numeros pares");
*/


/*
Hacer un programa que lea los lados de 4 triángulos, e informar:
a)	De cada uno de ellos, qué tipo de triángulo es: equilátero , isósceles o escaleno 
b)	Cantidad de triángulos de cada tipo.
c)	Tipo de triángulo del que hay menor cantidad. 
*/


/*
let equilatero = 0;
let isosceles = 0;
let escaleno = 0;

let triangulo = [0, 0, 0];

setTriangulo = () =>{
    let lado1 = parseInt(prompt("Ingrese valor de lado 1", ""));
    let lado2 = parseInt(prompt("Ingrese valor de lado 2", ""));
    let lado3 = parseInt(prompt("Ingrese valor de lado 3", ""));
    triangulo = [lado1, lado2, lado3];
}

for (let i = 1; i < 5; i = i + 1){
    alert("Ingrese datos de triangulo nro " + i);
    setTriangulo();
    if (triangulo[0] == triangulo[1] && triangulo[1] == triangulo[2]){
        equilatero = equilatero + 1;
    }else if (triangulo[0] != triangulo[1] && triangulo[1] != triangulo[2]){
        escaleno = escaleno + 1;
    }else {
        isosceles = isosceles + 1;
    }
}

alert("cantidad total de equilateros: " + equilatero + " de isosceles: " + isosceles + " y escalenos: " + escaleno);

if (equilatero < isosceles && equilatero < escaleno){
    alert("Hay menor cantidad de equilateros");
}else if (isosceles < equilatero && isosceles < escaleno){
    alert("Hay menor cantidad de isosceles");
}else if (escaleno < equilatero && escaleno < isosceles){
    alert("Hay menor cantidad de escalenos");
}else {
    alert("Hay dos o mas triángulos con la misma cantidad")
}
*/


/*
Hacer  una función que solicite la carga de dos enteros (primero el menor y luego el mayor) y nos muestre desde el menor hasta el mayor de uno en uno.
Por ejemplo si ingresamos los valores 4 y 10 luego se debe mostrar por pantalla:
4 5 6 7 8 9 10
*/

/*
menorAMayor = () =>{
    let menor = parseInt(prompt("Ingrese un numero entero", ""));
    let mayor = parseInt(prompt("Ingrese un numero entero mayor al anterior", ""));
    for (let i = menor; i <= mayor; i = i + 1){
        console.log(i);
    }
}
menorAMayor();
*/

/*
Hacer  una función que reciba tres enteros y retorne el promedio.
*/

/*
promedio = (valor1, valor2, valor3) =>{
    let suma = valor1 + valor2 + valor3;
    return suma / 3;
}

let valor1 = 10;
let valor2 = 20;
let valor3 = 30;

console.log("El promedio es: " + promedio(valor1, valor2, valor3));
*/


/*
Confeccionar una función que solicite la carga de 5 valores por teclado y retorne su suma.
*/

/*
suma5Valores = () => {
    let suma = 0;
    let numero = 0;
    for (let i = 0; i < 5; i = i + 1){
        numero = parseInt(prompt("ingrese un valor", ""));
        suma = suma + numero;
    }
    return suma;
}

alert("La suma es: " + suma5Valores());
*/


/*
Hacer una funcion que envie una palabra cualquiera y me la devuelva con signo de exclamación al inicio y al final !¡
*/

/*
exclamacion = (palabra) =>{
    return "¡" + palabra + "!";
}
let palabra = prompt("Ingrese una palabra", "");
alert(exclamacion(palabra));
*/

/*
Definí una función obtenerNombreCompleto que reciba como argumento un nombre y un apellido 
y devuelva un string con la unión de ambos valores
*/


/*
obtenerNombreCompleto = (nombre, apellido) =>{
    return nombre + " " + apellido;
}

let nombre = prompt("Nombre: ", "");
let apellido = prompt("Apellido; ", "");
alert(obtenerNombreCompleto(nombre, apellido));
*/


/*
Definí una función convertirHorasEnSegundos que reciba como argumento un número de horas y 
devuelva la conversión a segundos de dicha cantidad de horas
*/


/*
convertirHorasEnSegundos = (horas) =>{
    let minutos = horas * 60;
    let segundos = minutos * 60;
    return segundos;
}

let horas = parseInt(prompt("Ingrese cantidad de horas: ", ""));
alert(horas + " horas son " + convertirHorasEnSegundos(horas) + " segundos");
*/


/*
Definí una función generarEmail que reciba como argumentos dos string usuario 
y dominio y el un string email con el formato usuario@dominio.com
*/

// variable += numero a incrementar
//los arrays tambien llevan const

/*
For... of 
for (let nombre of nombres) //por cada item del array
{
    console.log(nombre);
}


    for exclusivo para recorrer arrays
*/