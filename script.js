
//bucles en JS

//!uiero que me muestren 300 veces "Hola Mundo"

/*
for (let i = 1; i <= 300; i = i + 1){
    console.log("Hola Mundo")
    console.log("La variable i vale: " + i)
}
*/

// Tipos de datos Objetos

//const listaDeAlumnos = ["peu", "gabriel", "german"];

//FORMA INCORRECTA

/*
console.log(listaDeAlumnos[0]);
console.log(listaDeAlumnos[1]);
console.log(listaDeAlumnos[2]);
 */

//FORMA CORRECTA
/*
for (let i = 0; i<3; i = i + 1){
    console.log(listaDeAlumnos[i]);
}
*/



/*LET permite redeclarar en un ambito distinto (por ejemplo dentro de un for 
o un if) cambiando temporalmente el valor de una variable. La variable VAR no 
tiene ambito*/

let nombre = "pepe";
if (true){
    let nombre = "juan";
    console.log(nombre);
}
console.log(nombre);

if (true){
    var apellido = "suarez";
}
console.log(apellido);

 /* 
 const notas = [7, 5, 10];
let acumulador = 0;
for (let i = 0; i < notas.length; i = i + 1){
    acumulador = acumulador + notas[i];
}
console.log("su promedio es de: " + acumulador / notas.length);

const notas2 = [5, 8, 7];
*/

//Principio DRY: DON'T REPEAT YOURSELF => no te repitas
//funciones (arrow function)

const calcularPromedio = (notasAPromediar) => {
    let acumulador = 0;
    for (let i = 0; i<notas.length; i = i + 1){
        acumulador = acumulador + notasAPromediar[i];
    }
    console.log("su promedio es de: " + acumulador / notasAPromediar.length)
}

const notas = [7, 5, 10];
const notas2 = [5, 8, 7];

calcularPromedio(notas);
calcularPromedio(notas2);

const obtenerDia = () => {
    return "el día es " + new Date().toUTCString();
}
console.log(obtenerDia());
alert(obtenerDia());

//abstraccion

const sumar = (a, b) => a + b;
console.log(sumar(3, 3));