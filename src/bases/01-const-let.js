//variables y Constantes
//var NO SE USA MAS

//const = valor fijo que nunca cambia
const nombre = 'Jonathan';
const apellido = 'Tekel';

//let = valor variable que puede cambiar
let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

if (true) {
    //se puede usar el let = valorDado, porque esta en otra instancia
    let valorDado = 6;
    console.log(valorDado);
}

console.log(valorDado);