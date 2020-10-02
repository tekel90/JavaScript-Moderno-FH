// Arreglos en JS
/* const arreglo = new Array(100); // esto es para hacer arrays de tamaño fijo, casi que no se usan */
const arreglo = [1, 2, 3, 4];

//no es recomendable usar el push, porque modifica el arreglo principal
/* arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4) */

/* 
Tarea, de esta instruccion
let arreglo2 = [arreglo, 5];
modificarla para que no sea una copia por referencia y en un nuevo segundo arreglo agregar el valor 5
*/
let arreglo2 = [...arreglo, 5]; // "..." es el operado spread

//esto tambien genera un nuevo arreglo por lo que solamente se modifica el arreglo3
const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);