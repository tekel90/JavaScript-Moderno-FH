const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321,
    }
};

/* console.table(persona); */
console.log(persona);

//asignacion de referencia
/* const persona2 = persona; // esto NO se debe hace JAMAS
persona2.nombre = 'Peter;' */

//ahora si esto es una copia del objeto para hacer uno nuevo
const persona2 = {
    ...persona //operador spread
}
persona2.nombre = 'Peter';


console.log(persona2);
console.log(persona);