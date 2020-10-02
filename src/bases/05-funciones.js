// Funciones en JS
/* const saludar = function (nombre) {
    return `Hola, ${nombre}`;
} */

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

const saludar4 = () => (`Hola Mundo`);

/* saludar = 30; */
/* console.log(saludar('Goku')); */

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

/* const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Papi1502',
    }
}; */

const getUser = () => ({
    uid: 'ABC123',
    username: 'El_Papi1502',
});

/* console.log(getUser()); */

const user = getUser();
console.log(user);

//Tarea
// 1. transformar a una funcion de flecha
// 2. tiene que retornar un objeto implicito
// 3. pruebas
/* function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    }
}; */
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Jonathan');
console.log(usuarioActivo);